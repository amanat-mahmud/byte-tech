import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  const categories = [
    {
      image: "https://images.unsplash.com/photo-1625315714730-d0830cd368bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      name: "CPU",
      link:"/category/processor"
    },
    {
      image: "https://images.unsplash.com/photo-1589779255718-3c459da9ffeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      name: "Motherboard",
      link:"/category/motherboard"
    },
    {
      image: "https://images.unsplash.com/photo-1618352926724-69e5e4215eef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      name: "Ram",
      link:"/category/ram"
    },
    {
      image: "https://images.unsplash.com/photo-1588382472578-8d8b337b277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Power Supply",
      link:"/category/power-supply"
    },
    {
      image: "https://images.unsplash.com/photo-1589995186053-91d65273cd68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Storage Device",
      link:"/category/storage-device"
    },
    {
      image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Monitor",
      link:"/category/monitor"
    },
    {
      image: "https://images.unsplash.com/photo-1632749042303-7f7a18ed6ff0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Others",
      link:"/category/others"
    },
  ];
  return (
    <div className="m-6">
      <h1 className="text-4xl font-bold">Featured Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {categories.map((category) => (
          <Link  key={category.name} href={category.link}>
            <div
              className="card w-96 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <Image
                  width="400"
                  height="200"
                  src={category.image}
                  alt="PC Component"
                />
              </figure>
              <div className="card-body flex justify-center items-center">
                <h1 className="text-4xl font-bold text-white">{category.name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
