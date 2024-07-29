import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">Your cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col  dark:bg-gray-50 dark:text-gray-800">
          <ul className="flex flex-col divide-y dark:divide-gray-300">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        Polaroid camera
                      </h3>
                      <p className="text-sm dark:text-gray-600">Classic</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">59.99€</p>
                      <p className="text-sm line-through dark:text-gray-400">
                        75.50€
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                  alt="Replica headphones"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        Replica headphones
                      </h3>
                      <p className="text-sm dark:text-gray-600">White</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">99.95€</p>
                      <p className="text-sm line-through dark:text-gray-400">
                        150€
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="font-semibold">357 €</span>
            </p>
            <p className="text-sm dark:text-gray-600">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-default-600"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-default-600 dark:text-gray-50 dark:border-default-600"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>
              Checkout
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// "use client";
// import { Button } from "@/components/ui/button";

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
// import {
//   decrementQty,
//   incrementQty,
//   removeAllProductsFromCart,
//   removeProductFromCart,
// } from "@/store/slices/cartSlice";
// import {
//   Headset,
//   HelpCircle,
//   Loader2,
//   LogOut,
//   Mail,
//   MessageSquareMore,
//   Minus,
//   PhoneCall,
//   Plus,
//   Presentation,
//   Settings,
//   ShoppingCart,
//   Trash,
//   User,
//   UserRound,
// } from "lucide-react";
// // import { headers } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export function CartMenu() {
//   const cartItems = useAppSelector((state) => state.cart.cartItems);
//   // console.log(cartItems);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useAppDispatch();
//   function handleRemove(id: number) {
//     dispatch(removeProductFromCart(id));
//   }
//   const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);
//   async function Checkout() {
//     setLoading(true);
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//     const response = await fetch(`${baseUrl}/api/checkout`, {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//       body: JSON.stringify({ products: cartItems }),
//     });

//     try {
//       if (response) {
//         setLoading(false);
//       }
//       const data = await response.json();
//       // console.log(data);

//       if (data?.url) {
//         // console.log(response.url);
//         const url = data?.url;
//         setLoading(false);
//         // console.log(url);
//         dispatch(removeAllProductsFromCart());
//         window.location.href = url;
//         // router.replace(url);
//       }
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg ">
//           <ShoppingCart className="text-lime-700 dark:text-lime-500" />
//           <span className="sr-only">Cart</span>
//           <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
//             {cartItems.length.toString().padStart(2, "0")}
//           </div>
//         </button>
//       </SheetTrigger>
//       {cartItems && cartItems.length > 0 ? (
//         <SheetContent className="w-[400px] sm:w-[540px]">
//           <SheetHeader>
//             <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 border-b pb-3">
//               Shopping Cart ({cartItems.length})
//             </h2>
//           </SheetHeader>
//           {/* CONTENT HWRE */}
//           <div className="">
//             {cartItems.map((item, i) => {
//               return (
//                 <div
//                   key={i}
//                   className="flex justify-between gap-4 py-3 border-b "
//                 >
//                   <Image
//                     width={200}
//                     height={200}
//                     alt="cart image"
//                     src={item.image}
//                     className="w-16 h-16 rounded-lg"
//                   />
//                   <div className="space-y-2">
//                     <h2 className="text-xs font-medium">{item.name}</h2>
//                     <button
//                       onClick={() => handleRemove(item.id)}
//                       className="text-xs flex items-center text-red-500"
//                     >
//                       <Trash className="w-4 h-4 mr-1" />
//                       <span>Remove</span>
//                     </button>
//                   </div>
//                   <div className="space-y-2">
//                     <h2 className="text-sx">${item.price}</h2>
//                     <div className="flex items-center space-x-3">
//                       <button
//                         onClick={() => dispatch(incrementQty(item.id))}
//                         className="border shadow rounded flex items-center justify-center w-10 h-7"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>

//                       <p>1</p>
//                       <button
//                         onClick={() => dispatch(decrementQty(item.id))}
//                         className="border shadow rounded flex items-center justify-center w-10 h-7 bg-slate-800 text-white"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             <div className="space-y-1 py-3 border-b mb-3">
//               <div className="flex items-center justify-between text-sm">
//                 <h2 className="font-medium">Total</h2>
//                 <p>${totalSum.toFixed(2)}</p>
//               </div>
//             </div>
//           </div>
//           <SheetFooter>
//             {!loading && (
//               <SheetClose asChild>
//                 <Button variant={"outline"} type="submit">
//                   Continue Shopping
//                 </Button>
//               </SheetClose>
//             )}
//             {loading ? (
//               <Button disabled className="flex gap-4">
//                 <Loader2 className="w-4 h-4 animate-spin mr-2" />
//                 <span>Processing...</span>
//               </Button>
//             ) : (
//               <Button onClick={Checkout}>
//                 <span>Proceed to Checkout</span>
//               </Button>
//             )}
//           </SheetFooter>
//         </SheetContent>
//       ) : (
//         <SheetContent className="w-[400px] sm:w-[540px]">
//           <SheetHeader>
//             <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 border-b pb-3">
//               Empty Cart
//             </h2>
//           </SheetHeader>
//           {/* CONTENT HWRE */}
//           <div className="min-h-80  flex-col space-y-4 flex items-center justify-center">
//             <Image
//               src="/empty-cart.png"
//               width={300}
//               height={300}
//               alt="empty cart"
//               className="w-36 h-36 object-cover"
//             />
//             <h2>Your Cart Empty</h2>
//             <SheetClose asChild>
//               <Button asChild size={"sm"} variant={"outline"} type="submit">
//                 <Link href="/">Continue Shopping to add Items</Link>
//               </Button>
//             </SheetClose>
//           </div>
//         </SheetContent>
//       )}
//     </Sheet>
//   );
// }
