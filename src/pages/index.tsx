import Head from 'next/head';
import MainLayout from '@/components/Layout/MainLayout';
import { MenuToggle } from '@/components';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Fill Boilerplate</title>
      </Head>
      <div className="container px-4 md:px-8">
        <MenuToggle onPress={() => {}} />
      </div>
    </MainLayout>
  );
}
