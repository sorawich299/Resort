import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

export default function SeoHead({
  title,
  description = "Experience beachfront luxury with Solunar’s private villas—serene, stylish, and unforgettable.",
  image = "/images/og-image.jpg", // ควรอยู่ใน public/
  url = "https://solunar.example.com", // ปรับเป็นโดเมนจริง
  keywords = "luxury villa, beachfront resort, Thailand villa, Solunar, private pool villa",
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
