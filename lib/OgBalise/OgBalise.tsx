import Head from "next/head";
import { useRouter } from "next/router";

interface props {
  readonly img?: string;
  readonly title?: string;
  readonly description?: string;
}

export default function OgBalise({ img, description, title }: props) {
  const router = useRouter(),
    baseUrl = "https://www.mo5.com/", //TODO .env
    url = `${baseUrl}${router.asPath}`,
    baseTitle = "MICRAL",
    defaultDescription = 'text',
    defaultIMG = `${baseUrl}doom-bg.jpg`,
    metaTitle = title ? `${title} | ` + baseTitle : baseTitle;

  function matomo() {
    return {
      __html: `
        //<![CDATA[
          <!-- Matomo -->
            //TODO ici le code de suivi avec les var en .ENV
          <!-- End Matomo Code -->
          //]]>
        `,
    };
  }

  return (
    <Head>
      <script dangerouslySetInnerHTML={matomo()} />
      <title>{metaTitle}</title>
      <link rel="icon" href="/favicon.png" />
      <meta property="og:title" content={metaTitle}/>
      <meta property="og:image" content={img ||defaultIMG} />
      <meta property="og:url" content={url} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description || defaultDescription}/>
      <meta name="twitter:card" content="photo" />
      <meta name="twitter:site" content={baseUrl} />
      <meta name="twitter:title" content={metaTitle}/>
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={img ||defaultIMG} />
      <meta name="twitter:url" content={url} />
    </Head>
  );
}
