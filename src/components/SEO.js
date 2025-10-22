import Head from "next/head";

export default function SEO({ title, description, keywords, image, url }) {
  const defaultImage = "/logo.png";
  const siteName = "Accounting Home";

  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (for Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical Link */}
      {url && <link rel="canonical" href={url} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
