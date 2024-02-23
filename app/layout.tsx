import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Cars Hub",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </>
  );
}
