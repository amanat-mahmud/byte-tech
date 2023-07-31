import FeaturedProduct from "@/components/FeaturedProduct";
import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const CategoryPage = ({allProducts}) => {
  return <div className="m-6">
  <h1 className="text-3xl font-bold">{`Category/${(allProducts[0].category).toUpperCase()}`}</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
  {allProducts.map(product=><FeaturedProduct key={product._id} product={product}></FeaturedProduct>)}
</div>
</div>;
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
