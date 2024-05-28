import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "../../public/favicon.svg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twinkle Live",
  description: "ライブチケットのお申し込みはこちらから",
  icons: [
    {
      rel: "icon",
      url: favicon.src,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
