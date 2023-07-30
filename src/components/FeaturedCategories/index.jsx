import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  const categories = [
    {
      image: "https://icons8.com/icon/9095/electronics",
      name: "CPU",
    },
    {
      image: "https://icons8.com/icon/35849/motherboard",
      name: "Motherboard",
    },
    {
      image: "https://icons8.com/icon/XbYaMYxvDSqK/ram",
      name: "Ram",
    },
    {
      image: "https://icons8.com/icon/lTpD2WXc5cqZ/power-supply",
      name: "Power Supply",
    },
    {
      image: "https://icons8.com/icon/9936/stack",
      name: "Storage Device",
    },
    {
      image: "https://icons8.com/icon/37837/monitor",
      name: "Monitor",
    },
    {
      image: "https://icons8.com/icon/68602/video-card",
      name: "Others",
    },
  ];
  return (
    <div className="m-6">
      <h1 className="text-4xl font-bold">Featured Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {categories.map((category) => (
          <Link  key={categories.name} href={`/category/${category.name}`}>
            <div
              className="card w-96 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <Image
                  width="200"
                  height="200"
                  src={category.image}
                  alt="PC Component"
                />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h1 className="text-4xl font-bold">{category.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
