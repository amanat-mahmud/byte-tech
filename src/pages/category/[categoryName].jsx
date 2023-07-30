import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const CategoryPage = ({allProducts}) => {
    console.log(allProducts);
  return <div></div>;
};

export default CategoryPage;

export const getStaticPaths = async ({params}) => {
    try{
        const { categoryName } = params;
      const res = await fetch(`/category/${categoryName}`);
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
      const { categoryName } = params;
      console.log(params);
      const res = await fetch(
        `https://byte-tech-server.vercel.app/category/${categoryName}`
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

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
