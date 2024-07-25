import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494209ae4949b66bd9c69f1_Earbud%20Y168A-p-500.jpg",
      category: "Earbuds",
      title: "Earbud Y168A",
      price: "$270.00 USD",
    },
    {
      id: 2,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941ff46f6ee562b9a226d1_Earbud%20Y168B-p-500.jpg",
      category: "Earbuds",
      title: "Earbud Q223B",
      price: "$249.00 USD",
    },
    {
      id: 3,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494208ba7cf97017c588eeb_Pro%20X168A-p-500.jpg",
      category: "Headphones",
      title: "Headphone X300",
      price: "$350.00 USD",
    },
    {
      id: 4,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941dafb72ca9e39c649c95_Pro%20X168C-p-500.jpg",
      category: "Headphones",
      title: "Headphone Z500",
      price: "$450.00 USD",
    },
    {
      id: 5,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494205c00baad9c9f0ed598_Speaker%20P168A-p-500.jpg",
      category: "Speakers",
      title: "Speaker M100",
      price: "$250.00 USD",
    },
    {
      id: 6,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941f0d5df34d5000f5ca80_Speaker%20P168B-p-500.jpg",
      category: "Speakers",
      title: "Speaker B200",
      price: "$240.00 USD",
    },
    {
      id: 7,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494204fe02b9ba4e337801e_Wireless%20Charger-p-500.jpg",
      category: "Accessories",
      title: "Wireless Charger",
      price: "$50.00 USD",
    },
    {
      id: 8,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/6494201900baad9c9f0e7fb2_Power%20Adapter.jpg",
      category: "Accessories",
      title: "Power Adaptor",
      price: "$20.00 USD",
    },
    {
      id: 9,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941ddcf2c4f33633e0f5ca_Earbud%20Y168D-p-500.jpg",
      category: "Earbuds",
      title: "Earbud W234",
      price: "$220.00 USD",
    },

    {
      id: 10,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941d996f6ee562b99f8957_Speaker%20P168C-p-500.jpg",
      category: "Speakers",
      title: "Speaker P300",
      price: "$180.00 USD",
    },
    {
      id: 11,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941d255df34d5000f389b8_Audio%20Cable-p-500.jpg",
      category: "Accessories",
      title: "Audio Cable",
      price: "$15.00 USD",
    },
    {
      id: 12,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941f3d42fa10094f347341_Earbud%20Y168C-p-500.jpg",
      category: "Earbuds",
      title: "Earbud F520",
      price: "$300.00 USD",
    },

    {
      id: 13,
      img: "https://assets-global.website-files.com/649409997a1a98426b1aa230/64941ee37a1a98426b3725b2_Headphone%20Case-p-500.jpg",
      category: "Accessories",
      title: "Headphone Case",
      price: "$40.00 USD",
    },
  ];
  const featuredProducts = products.slice(1, 5);
  // console.log(featuredProducts);
  return (
    <div className="flex items-center justify-center flex-col gap-16 py-4">
      <h2 className="font-bold text-4xl">FeaturedProducts</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2  lg:gap-10 gap-4">
        {featuredProducts.map((item) => (
          <Link
            key={item.id}
            href={`products${item.id}`}
            className="flex flex-col   bg-[#E6E7F2] px-4 py-2 gap-1 rounded-2xl "
          >
            <Image
              width={1080}
              height={1080}
              className="w-60 h-60 hover:animate-pulse"
              src={item.img}
              alt=""
            />
            <h3 className="text-gray-400 font-semibold">{item.category}</h3>
            <p className=" font-bold">{item.title}</p>
            <span className="text-blue-600">{item.price}</span>
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-gray-100 font-bold rounded-md">
          All Products
        </button>
      </div>
    </div>
  );
}
