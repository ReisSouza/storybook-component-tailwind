import Head from 'next/head';
import { GetServerSideProps } from 'next';
import useSWR from 'swr';
import MainLayout from '@/components/Layout/MainLayout';
import getPosts from '@/features/posts/api';
import { Post } from '@/features/posts/types';

type HomeProps = {
  fallbackData: Post[];
};

export default function Home({ fallbackData }: HomeProps) {
  const { data } = useSWR('/posts', getPosts, { fallbackData });

  return (
    <MainLayout>
      <Head>
        <title>Fill Boilerplate</title>
      </Head>
      <div className="container px-4 md:px-8">
        <ul className="list-disc list-inside">
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const Posts = await getPosts();
  return { props: { fallbackData: Posts } };
};
