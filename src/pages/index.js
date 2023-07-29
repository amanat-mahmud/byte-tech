import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div>
      <Head>
        <html data-theme="dark"></html>
        <title>Byte tech</title>
      </Head>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
} 