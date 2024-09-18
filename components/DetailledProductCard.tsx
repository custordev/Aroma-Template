"use client";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/app/store/slice/cartSlice";
import { Button } from "./ui/button";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { CartItem, Product } from "@/types/type";
import Link from "next/link";
import Image from "next/image";

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

function DetailledProductCard({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [existing, setExisting] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.Cart.cartItems);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product) {
      setExisting(cartItems.some((item) => item.id === product.id));
    }
  }, [product, cartItems]);

  function addToCart() {
    if (product) {
      const newCartItem: CartItem = {
        id: product.id,
        image: product.image,
        name: product.title,
        price: product.price,
      };
      dispatch(addProductToCart(newCartItem));
      localStorage.setItem("cart", JSON.stringify([...cartItems, newCartItem]));
      setExisting(true);
    }
  }

  function removeFromCart(id: number) {
    dispatch(removeProductFromCart(id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((item) => item.id !== id))
    );
    setExisting(false);
  }

  if (loading) return <ProductSkeleton />;

  if (!product) return <div>Failed to load product</div>;

  return (
    <div>
      <div className="flex mt-3">
        <Link
          href="/shop"
          className="text-blue-600 font-bold flex items-center"
        >
          Products <ChevronRight className="w-4 h-4 mx-1" />
        </Link>
        <span className="text-gray-600 font-bold">{product.title}</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-4">
        <div className="w-full lg:w-1/2">
          <Image
            width={1080}
            height={1080}
            className="w-full h-[400px] rounded-2xl object-cover"
            src={product.image || "/placeholder.png"}
            alt={product.title || "Product Image"}
          />
        </div>
        <div className="flex flex-col gap-6 mt-1 w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold">
            {product.title || "Product Title"}
          </h2>
          <p className="text-gray-500">
            {product.description ||
              "Discover the perfect soundtrack for your life with our curated selection of music electronics and accessories."}
          </p>
          <p className="text-blue-600 font-bold">
            ${product.price?.toFixed(2) || "0.00"} USD
          </p>
          <div className="relative mb-0">
            {existing ? (
              <Button
                variant="destructive"
                onClick={() => removeFromCart(product.id)}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailledProductCard;
