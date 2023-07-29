import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <html data-theme="dark"></html>
        <title>Byte tech</title>
      </Head>
    </div>
  );
}
