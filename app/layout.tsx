import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from 'react';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";

import { absoluteUrl } from "@/lib/absoluteUrl";


export const metadata: Metadata = {
  title: "Solunar. | Bang Sare",
  description: "พูลวิลล่าติดทะเล บรรยากาศเป็นส่วนตัว",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title:  "Solunar. | Bang Sare",
    description: "พูลวิลล่าติดทะเล บรรยากาศเป็นส่วนตัว",
    images: [
      { url: absoluteUrl("/images/og/home.webp") }, // ต้องเป็น absolute เท่านั้น
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:  "Solunar. | Bang Sare",
    description: "พูลวิลล่าติดทะเล บรรยากาศเป็นส่วนตัว",
    images: [absoluteUrl("/images/og/home.webp")],
    // (ไม่บังคับ) ใส่ handle เพื่อความสมบูรณ์
    // site: "@your_twitter",
    // creator: "@your_twitter",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },           // default
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>
         <SeoHead
          title="Solunar Villas | Beachfront Luxury Retreat"
          description="Escape to paradise with Solunar's beachfront private pool villas in Thailand."
          url="https://solunar.example.com"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}