"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/types/type";
import { getAllProducts } from "@/actions/product";

function ProductCardSkeleton() {
  return (
    <div className="flex flex-col bg-[#E6E7F2] px-4 py-2 gap-1 rounded-2xl animate-pulse">
      <div className="w-60 h-60 bg-gray-300 rounded-lg"></div>
      <div className="h-4 bg-gray-300 w-1/3 rounded mt-2"></div>
      <div className="h-5 bg-gray-300 w-2/3 rounded mt-1"></div>
      <div className="h-4 bg-gray-300 w-1/4 rounded mt-1"></div>
    </div>
  );
}

export default function Page() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getAllProducts();
        setLoading(true);
        setProducts(fetchedProducts ?? []);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  const itemsPerPage = 6;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category.title.toLowerCase() === selectedCategory
        );
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  function handleClick(category: string) {
    setSelectedCategory(category);
  }

  return (
    <section className="flex flex-col gap-10 py-6">
      <section className="flex items-center bg-[#E6E7F2] justify-between rounded-2xl">
        <div className="flex flex-col lg:px-16 px-4 gap-4">
          <h2 className="font-bold lg:text-4xl">Our Products</h2>
          <p className="lg:w-[24rem] text-sm text-gray-500">
            Discover the perfect soundtrack for your life with our curated
            selection of music Electronics and accessories.Our store offers
            everything you need to enhance your musical experience.
          </p>
        </div>
        <div>
          <Image
            width={1080}
            height={1080}
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6495220e24011b4630cba0ad_Category.png"
            alt=""
            className="lg:w-52 lg:h-52 mt-10 w-96 h-40 rounded-r-2xl"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Product Category</h2>
          <hr />
          <ul className="grid grid-cols-3 lg:flex lg:flex-col lg:items-start md:flex md:flex-col md:items-start gap-2 mt-2">
            <button
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
            <PaginationContent className="flex flex-col gap-8">
              <PaginationItem>
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
                  {loading
                    ? Array(6)
                        .fill(0)
                        .map((_, index) => (
                          <ProductCardSkeleton key={index} />
                        ))
                    : currentProducts.map((item) => (
                        <Link
                          key={item.id}
                          href={`/shop/${item.id}`}
                          className="flex flex-col bg-[#E6E7F2] px-4 py-2 gap-1 rounded-2xl"
                        >
                          <Image
                            width={1080}
                            height={1080}
                            className="w-60 h-60 hover:animate-pulse"
                            src={item.imageUrl as string}
                            alt={item.title}
                          />
                          <h3 className="text-gray-400 font-semibold">
                            {item.category.title}
                          </h3>
                          <p className="font-bold">{item.title}</p>
                          <span className="text-blue-600 font-semibold">
                            ${item.price} USD
                          </span>
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
