"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const products = [
    {
      id: 1,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494209ae4949b66bd9c69f1_Earbud%20Y168A-p-500.jpg",
      category: "earbuds",
      title: "Earbud Y168A",
      price: "$270.00 USD",
    },
    {
      id: 2,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941ff46f6ee562b9a226d1_Earbud%20Y168B-p-500.jpg",
      category: "earbuds",
      title: "Earbud Q223B",
      price: "$249.00 USD",
    },
    {
      id: 3,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494208ba7cf97017c588eeb_Pro%20X168A-p-500.jpg",
      category: "headphones",
      title: "Headphone X300",
      price: "$350.00 USD",
    },
    {
      id: 4,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941dafb72ca9e39c649c95_Pro%20X168C-p-500.jpg",
      category: "headphones",
      title: "Headphone Z500",
      price: "$450.00 USD",
    },
    {
      id: 5,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494205c00baad9c9f0ed598_Speaker%20P168A-p-500.jpg",
      category: "speakers",
      title: "Speaker M100",
      price: "$250.00 USD",
    },
    {
      id: 6,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941f0d5df34d5000f5ca80_Speaker%20P168B-p-500.jpg",
      category: "speakers",
      title: "Speaker B200",
      price: "$240.00 USD",
    },
    {
      id: 7,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494204fe02b9ba4e337801e_Wireless%20Charger-p-500.jpg",
      category: "accessories",
      title: "Wireless Charger",
      price: "$50.00 USD",
    },
    {
      id: 8,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494201900baad9c9f0e7fb2_Power%20Adapter.jpg",
      category: "accessories",
      title: "Power Adaptor",
      price: "$20.00 USD",
    },
    {
      id: 9,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941ddcf2c4f33633e0f5ca_Earbud%20Y168D-p-500.jpg",
      category: "earbuds",
      title: "Earbud W234",
      price: "$220.00 USD",
    },

    {
      id: 10,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941d996f6ee562b99f8957_Speaker%20P168C-p-500.jpg",
      category: "speakers",
      title: "Speaker P300",
      price: "$180.00 USD",
    },
    {
      id: 11,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941d255df34d5000f389b8_Audio%20Cable-p-500.jpg",
      category: "accessories",
      title: "Audio Cable",
      price: "$15.00 USD",
    },
    {
      id: 12,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941f3d42fa10094f347341_Earbud%20Y168C-p-500.jpg",
      category: "earbuds",
      title: "Earbud F520",
      price: "$300.00 USD",
    },

    {
      id: 13,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941ee37a1a98426b3725b2_Headphone%20Case-p-500.jpg",
      category: "accessories",
      title: "Headphone Case",
      price: "$40.00 USD",
    },
    {
      id: 14,
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      category: "headphones",
      title: "Replica headphones",
      price: "$30.00 USD",
    },
    {
      id: 15,
      img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80",
      category: "accessories",
      title: "Polaroid camera",
      price: "$60.00 USD",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the start and end index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  function handleClick(category: string) {
    // console.log(category);
    setSelectedCategory(category);
  }

  return (
    <section className="flex flex-col gap-10 py-6">
      <section className="flex items-center bg-[#E6E7F2] justify-between rounded-2xl ">
        <div className="flex flex-col px-16 gap-4">
          <h2 className="font-bold lg:text-4xl">Our Products</h2>
          <p className="lg:w-[34rem] text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            enim ut metus dapibus egestas
          </p>
        </div>
        <div className="">
          <Image
            width={1080}
            height={1080}
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6495220e24011b4630cba0ad_Category.png"
            alt=""
            className="lg:w-52 lg:h-52  mt-10 w-96 h-40 rounded-r-2xl"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between  ">
        <div className="flex flex-col gap-3 ">
          <h2 className="text-lg font-semibold">Product Category</h2>
          <hr />
          <ul className=" grid grid-cols-3 lg:flex lg:flex-col lg:items-start md:flex md:flex-col md:items-start gap-2 mt-2">
            <button
              className=""
              onClick={() => handleClick("all")}
              style={{
                color: selectedCategory === "all" ? "blue" : "black",
                fontWeight: selectedCategory === "all" ? "bold" : "normal",
              }}
            >
              All Products
            </button>
            <button
              onClick={() => handleClick("earbuds")}
              style={{
                color: selectedCategory === "earbuds" ? "blue" : "black",
                fontWeight: selectedCategory === "earbuds" ? "bold" : "normal",
              }}
            >
              Earbuds
            </button>
            <button
              onClick={() => handleClick("headphones")}
              style={{
                color: selectedCategory === "headphones" ? "blue" : "black",
                fontWeight:
                  selectedCategory === "headphones" ? "bold" : "normal",
              }}
            >
              Headphones
            </button>
            <button
              onClick={() => handleClick("speakers")}
              style={{
                color: selectedCategory === "speakers" ? "blue" : "black",
                fontWeight: selectedCategory === "speakers" ? "bold" : "normal",
              }}
            >
              Speakers
            </button>
            <button
              onClick={() => handleClick("accessories")}
              style={{
                color: selectedCategory === "accessories" ? "blue" : "black",
                fontWeight:
                  selectedCategory === "accessories" ? "bold" : "normal",
              }}
            >
              Accessories
            </button>
          </ul>
        </div>
        <div className="mt-3">
          <Pagination>
            <PaginationContent className="flex flex-col gap-8 ">
              <PaginationItem>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
                  {currentProducts.map((item) => (
                    <Link
                      key={item.id}
                      href={`shop/${item.id}`}
                      className="flex flex-col   bg-[#E6E7F2] px-4 py-2 gap-1 rounded-2xl "
                    >
                      <Image
                        width={1080}
                        height={1080}
                        className="w-60 h-60 hover:animate-pulse"
                        src={item.img}
                        alt=""
                      />
                      <h3 className="text-gray-400 font-semibold">
                        {item.category}
                      </h3>
                      <p className=" font-bold">{item.title}</p>
                      <span className="text-blue-600">{item.price}</span>
                    </Link>
                  ))}
                </div>
              </PaginationItem>
              <PaginationItem>
                {currentPage > 1 && (
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  />
                )}
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationLink
                    key={index}
                    href="#"
                    isActive={index + 1 === currentPage}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                ))}
                {currentPage < totalPages && (
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  />
                )}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </section>
  );
}
