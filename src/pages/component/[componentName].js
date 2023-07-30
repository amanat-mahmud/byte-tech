import SingleComponent from "@/components/SingleComponent";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const ComponentPage = ({allProducts}) => {
  return <section className="m-6">
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
  {allProducts?.map(product=><SingleComponent key={product._id} product={product}></SingleComponent>)}
</div>
</section>;
};

export default ComponentPage;

export const getStaticPaths = async ({params}) => {
    try{
        const { componentName } = params;
      const res = await fetch(`https://byte-tech-server.vercel.app/category/${componentName}`);
    const allProducts = await res.json();
    const paths = allProducts?.map((product) => ({
      params: { productId: product._id },
    }));
    return { paths, fallback: false };
    }catch (error) {
      console.error('Error fetching product IDs:', error);
      return {
        paths: [],
        fallback: false,
      };
    }
  };
  
  export const getStaticProps = async ({ params }) => {
    try {
      const { componentName } = params;
      console.log(params);
      const res = await fetch(
        `https://byte-tech-server.vercel.app/category/${componentName}`
      );
      const data = await res.json();
      return {
        props: {
          allProducts: data,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          products: [],
        },
      };
    }
  };

ComponentPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
