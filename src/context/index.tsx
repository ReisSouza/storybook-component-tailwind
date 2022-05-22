import { ReactNode } from 'react';
import { DefaultSeo } from 'next-seo';
import { SWRProvider } from '@/lib/swr';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          url: 'https://',
          site_name: '',
        }}
        twitter={{
          cardType: 'summary',
        }}
        titleTemplate="%s - "
        defaultTitle=""
      />
      <SWRProvider>{children}</SWRProvider>
    </>
  );
}
