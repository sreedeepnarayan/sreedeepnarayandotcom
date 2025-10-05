import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sreedeep Narayan - Product Manager & Full Stack Engineer",
  description: "Product Manager & Full Stack Engineer crafting digital experiences that bridge technology and creativity. Portfolio showcasing professional work and creative projects.",
  keywords: "Product Manager, Full Stack Engineer, React, Node.js, TypeScript, Portfolio",
  authors: [{ name: "Sreedeep Narayan" }],
  creator: "Sreedeep Narayan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sreedeepnarayan.com",
    title: "Sreedeep Narayan - Product Manager & Full Stack Engineer",
    description: "Product Manager & Full Stack Engineer crafting digital experiences that bridge technology and creativity.",
    siteName: "Sreedeep Narayan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreedeep Narayan - Product Manager & Full Stack Engineer",
    description: "Product Manager & Full Stack Engineer crafting digital experiences that bridge technology and creativity.",
    creator: "@sreedeepnarayan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
