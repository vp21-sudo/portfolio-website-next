"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/top-nav";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "VP | sudo",
//   description: "A portfolio website built using Next JS, hosted using vercel.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>VP | sudo</title> {/* Set the page title here */}
        <meta
          name="description"
          content="A portfolio website built using Next JS, hosted using vercel."
        />
      </head>
      <body
        className={`${inter.className} bg-slate-200 scroll-smooth`}
        style={{ maxWidth: "100vw", overflowX: "hidden" }}
      >
        <TopNav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
