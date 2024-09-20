"use client";
import { getProductById } from "@/actions/product";
import { ProductProps } from "@/types/type";

import { Button } from "./ui/button";
import { ChevronRight, ShoppingBag } from "lucide-react";

import Link from "next/link";

import { useEffect, useState } from "react";
import Image from "next/image";

function ProductDetail({ productId }: { productId: string }) {
  const [detailedProduct, setDetailedProduct] = useState<ProductProps | null>(
    null
  );

  function ProductSkeleton() {
    return (
      <div className="animate-pulse">
        <div className="flex mt-3">
          <div className="w-24 h-6 bg-gray-200 rounded mr-2"></div>
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 mt-4">
          <div className="w-full lg:w-1/2 h-[400px] bg-gray-200 rounded-2xl"></div>
          <div className="flex flex-col gap-6 mt-1 w-full lg:w-1/2">
            <div className="h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product: ProductProps | any = await getProductById(productId);
        // console.log(product);
        setDetailedProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <div>
      {detailedProduct ? (
        <div>
          <div className="flex mt-3">
            <Link
              href="/shop"
              className="text-blue-600 font-bold flex items-center"
            >
              Products <ChevronRight className="w-4 h-4 mx-1" />
            </Link>
            <span className="text-gray-600 font-bold">
              {detailedProduct.title}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-4">
            <div className="w-full lg:w-1/2">
              <Image
                width={1080}
                height={1080}
                className="w-full h-[400px] rounded-2xl object-contain"
                src={detailedProduct.imageUrl || "/placeholder.png"}
                alt={detailedProduct.title || "Product Image"}
              />
            </div>
            <div className="flex flex-col gap-6 mt-1 w-full lg:w-1/2">
              <h2 className="text-4xl font-extrabold">
                {detailedProduct.title || "Product Title"}
              </h2>
              <p className="text-gray-500">
                {detailedProduct.description ||
                  "Discover the perfect soundtrack for your life with our curated selection of music electronics and accessories."}
              </p>
              <p className="text-blue-600 font-bold">
                ${detailedProduct.price?.toFixed(2) || "0.00"} USD
              </p>
              {/* <div className="relative mb-0">
                {existing ? (
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(detailedProduct.id)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    <span>Remove from cart</span>
                  </Button>
                ) : (
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={addToCart}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    <span>Add to cart</span>
                  </Button>
                )}
              </div> */}
              <div className="relative mb-0">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Add to cart</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>
          <ProductSkeleton />
        </p>
      )}
    </div>
  );
}

export default ProductDetail;
