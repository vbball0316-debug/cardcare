import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "CardCare | クレジットカード年会費管理サービス",
  description:
    "CardCareはクレジットカードの年会費管理をサポートするサービスです。年会費無料条件の管理やカード情報の整理をもっと簡単にします。",
  openGraph: {
    title: "CardCare | クレジットカード年会費管理サービス",
    description:
      "クレジットカードの年会費管理をもっと簡単にするCardCare。",
    url: "https://www.cardcare.jp",
    siteName: "CardCare",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://www.cardcare.jp/og-image.png",
        width: 1200,
        height: 630,
        alt: "CardCare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CardCare | クレジットカード年会費管理サービス",
    description:
      "クレジットカードの年会費管理をもっと簡単にするCardCare。",
    images: ["https://www.cardcare.jp/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
