import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/top-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VP | sudo",
  description: "A portfolio website built using Next JS, hosted using vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 scroll-smooth`} style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
