import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProducts from "@/views/FeaturedProducts";


export default function HomePage({allProducts}) {
  // console.log(allProducts);
  return (
    <div>
      <Head>
        <html data-theme="dark"></html>
        <title>Byte tech</title>
      </Head>
      <FeaturedProducts allProducts={allProducts}/>
    </div>
  );
}


export const getStaticProps = async () => {
  try{
    const res = await fetch('https://byte-tech-server.vercel.app/products');
    const data = await res.json();
    return {
      props:{
        allProducts:data,
      }
    }
  }
  catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        allProducts: []
      },
    };
}
}
HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
} 