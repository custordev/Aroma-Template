import { getAllProducts } from "@/actions/product";
import { ProductProps } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function FeaturedProducts() {
  const products: ProductProps[] | any = await getAllProducts();
  // console.log(products);

  const featuredProducts = products.slice(9, 13);
  // console.log(featuredProducts);
  return (
    <div className="flex items-center justify-center flex-col gap-16 py-4">
      <h2 className="font-bold text-4xl">FeaturedProducts</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1  lg:gap-10 gap-4">
        {featuredProducts.map((item: any) => (
          <Link
            key={item.id}
            href={`shop/${item.id}`}
            className="group flex flex-col   bg-[#E6E7F2] px-4 py-2 gap-1 rounded-2xl "
          >
            <Image
              width={1080}
              height={1080}
              className="object-cover transition-transform duration-300 group-hover:animate-pulse "
              src={item.imageUrl}
              alt=""
            />
            <h3 className="text-gray-400 font-semibold">
              {item.category.title}
            </h3>
            <p className=" font-bold">{item.title}</p>
            <span className="text-blue-600 font-semibold">
              ${item.price} {""} USD
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={"/shop"}
          className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-gray-100 font-bold rounded-md"
        >
          All Products
        </Link>
      </div>
    </div>
  );
}
