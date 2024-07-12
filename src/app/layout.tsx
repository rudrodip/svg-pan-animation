import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://svg-pan-animation.vercel.app/"),
  title: "SVG Pan Animation",
  description: "Interactive SVG Pan Animation made with Next.js and Framer Motion",
  keywords: [
    "nextjs",
    "typescript",
    "framer-motion",
    "svg",
    "animation",
    "interactive",
    "pan",
    "scroll",
    "linear",
  ],
  authors: [
    {
      name: "Rudro Dip Sarker",
      url: "https://rdsx.dev",
    },
  ],
  creator: "Rudro Dip Sarker",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-32x32.png",
  },
  // OpenGraph metadata
  openGraph: {
    title: "SVG Pan Animation",
    description: "Interactive SVG Pan Animation made with Next.js and Framer Motion",
    url: "https://svg-pan-animation.vercel.app/",
    siteName: "SVG Pan Animation",
    images: [
      {
        url: "https://svg-pan-animation.vercel.app/og.png",
        width: 2880,
        height: 1800,
        alt: "SVG Pan Animation",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "https://svg-pan-animation.vercel.app",
    title: "SVG Pan Animation",
    description: "Interactive SVG Pan Animation made with Next.js and Framer Motion",
    images: {
      url: "https://svg-pan-animation.vercel.app/og.png",
      width: 2800,
      height: 1800,
      alt: "SVG Pan Animation",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
