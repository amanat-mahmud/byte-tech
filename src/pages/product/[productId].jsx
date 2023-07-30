import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = ({ product }) => {
  const {
    averageRating,
    category,
    description,
    image,
    keyFeatures,
    price,
    productName,
    reviews,
    status,
  } = product;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <Image
          width="300"
          height="300"
          className="mt-6 w-full"
          alt="img of a girl posing"
          src={image}
        />
      </div>
      <div className="md:hidden">
        <Image
          width="300"
          height="300"
          className="w-full"
          alt="img of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <h1
            className="
							lg:text-4xl
							text-xl
							font-semibold
							lg:leading-9
							leading-8"
          >
            {productName}
          </h1>
          <span className="badge badge-accent mt-2">{category}</span>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-2xl font-bold">Price</p>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold leading-none mr-3">{price}</p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-2xl font-bold">Rating</p>
          <div className="flex items-center justify-center">
            <AiFillStar className="text-2xl" />
            <p className="text-2xl">{averageRating}</p>
          </div>
        </div>
        <button
          className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						btn-accent
						w-full
						py-4
                        mt-2
					"
        >
          <svg
            className="mr-3"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66699 4.83333V4.84166"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.333 11.5V11.5083"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {status}
        </button>
        <div>
          <p className=" text-base lg:leading-tight leading-normal mt-7">
            {description}
          </p>
          <p className="text-3xl font-bold leading-4 mt-7">Key Features</p>
          {keyFeatures?.map((feature, idx) => (
            <p className="text-base leading-4 mt-4 " key={idx}>
              {feature}
            </p>
          ))}
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4">Shipping and returns</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold my-4">Reviews:</h1>
          {reviews?.map((review) => (
              <div className="flex items-center my-4 border p-4" key={review.username}>
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                      width="50"
                      height="50"
                      src="https://i.ibb.co/X7Pnwry/main-qimg-c77c9e1c01ec9e3780be0c03bcb03ba8-lq.jpg"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="ml-5">
                <p className="text-xl">{review.username}</p>
                <p className="flex items-center text-xl"><AiFillStar/> {review.rating}</p>
                <p className="text-xl">{review.comment}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  try{
    const res = await fetch("https://byte-tech-server.vercel.app/products");
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
    const { productId } = params;
    const res = await fetch(
      `https://byte-tech-server.vercel.app/product/${productId}`
    );
    const data = await res.json();
    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        product: {},
      },
    };
  }
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
