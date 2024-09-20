"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { removeProductFromCart } from "@/app/store/slice/cartSlice";
import { decrement, increment } from "@/app/store/slice/countSlice";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Headset,
  HelpCircle,
  Loader2,
  LogOut,
  Mail,
  MessageSquareMore,
  Minus,
  PhoneCall,
  Plus,
  Presentation,
  Settings,
  ShoppingCart,
  Trash,
  User,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function CartItemSkeleton() {
  return (
    <div className="flex justify-between gap-4 py-3 border-b animate-pulse">
      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
      <div className="space-y-2 flex-grow">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-16"></div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-7 bg-gray-200 rounded"></div>
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <div className="w-10 h-7 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function Cart() {
  const cartItems = useAppSelector((state) => state.Cart.cartItems);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleRemove(id: number) {
    dispatch(removeProductFromCart(id));
  }

  const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);

  async function Checkout() {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
      const response = await fetch(`${baseUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data?.url) {
          window.location.href = data.url;
        }
      } else {
        throw new Error("Checkout failed");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
          <ShoppingCart className="text-black" />
          <span className="sr-only">Cart</span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 border-b pb-3">
            Shopping Cart ({cartItems.length})
          </h2>
        </SheetHeader>
        {loading ? (
          <div className="space-y-4 py-4">
            {[...Array(3)].map((_, index) => (
              <CartItemSkeleton key={index} />
            ))}
          </div>
        ) : cartItems.length > 0 ? (
          <ScrollArea className="flex-grow">
            <div className="space-y-4 py-4 pr-4">
              {cartItems.map((item, i) => (
                <div key={i} className="flex justify-between gap-4 py-3 border-b">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      fill
                      src={item.image}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h2 className="text-sm font-medium">{item.name}</h2>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xs flex items-center text-red-500"
                    >
                      <Trash className="w-4 h-4 mr-1" />
                      <span>Remove</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-sm">${item.price.toFixed(2)}</h2>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => dispatch(decrement())}
                        className="border shadow rounded flex items-center justify-center w-10 h-7"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <p className="text-sm">1</p>
                      <button
                        onClick={() => dispatch(increment())}
                        className="border shadow rounded flex items-center justify-center w-10 h-7 bg-slate-800 text-white"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="min-h-80 flex-col space-y-4 flex items-center justify-center">
            <Image
              src="/empty-cart.png"
              width={300}
              height={300}
              alt="empty cart"
              className="w-36 h-36 object-cover"
            />
            <h2>Your Cart is Empty</h2>
            <SheetClose asChild>
              <Button asChild size="sm" variant="outline" type="submit">
                <Link href="/">Continue Shopping to add Items</Link>
              </Button>
            </SheetClose>
          </div>
        )}
        {cartItems.length > 0 && (
          <>
            <div className="space-y-1 py-3 border-t mt-3">
              <div className="flex items-center justify-between text-sm">
                <h2 className="font-medium">Total</h2>
                <p>${totalSum.toFixed(2)}</p>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline" type="submit">
                  Continue Shopping
                </Button>
              </SheetClose>
              <Button onClick={Checkout} disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Proceed to Checkout</span>
                )}
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}