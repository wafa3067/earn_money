// pages/_app.tsx
import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Import your global CSS file
import { ThemeProvider } from '@mui/material/styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-4451029645343586",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
