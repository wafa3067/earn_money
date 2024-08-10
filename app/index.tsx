// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
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
      <h1>Welcome to My Next.js App</h1>
      <div className="ads-container">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-4451029645343586"
          data-ad-slot="1234567890"
          data-ad-format="auto"
        ></ins>
      </div>
    </div>
  );
}
