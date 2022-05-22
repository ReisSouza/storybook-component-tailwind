import Head from 'next/head';
import MainLayout from '@/components/Layout/MainLayout';
import Button from '@/components/Button';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Fill Boilerplate</title>
      </Head>
      <div className="container px-4 md:px-8">
        <Button as="a">test</Button>
      </div>
    </MainLayout>
  );
}
