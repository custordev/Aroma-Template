import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ValueSection() {
  const values = [
    {
      id: 1,
      img: "https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494068638783c5b3be78d88_Quality.svg",
      title: "Quality",
      des: "Uncompromising commitment to superior sound, design, and durability in our audio products.",
    },
    {
      id: 2,
      img: "https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406860bee68e0b82eed9e_Customer%20Satsifaction.svg",
      title: "Customer Satisfaction",
      des: "Going the extra mile to provide exceptional service, support, and personalized experiences that leave our customers delighted.",
    },
    {
      id: 3,
      img: "https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940686eaf0cb93c03aa059_Sound.svg",
      title: "Passion for Sound",
      des: "Fueled by our deep appreciation for the profound impact of audio, we create products that ignite passion and elevate everyday moments",
    },
    {
      id: 4,
      img: "https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406865ac55c5cf0bd9533_Innovation.svg",
      title: "Innovation",
      des: "Constantly pushing the boundaries of audio technology to deliver cutting-edge features and immersive experiences.",
    },
    {
      id: 5,
      img: "https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494068642fa10094f130049_Design.svg",
      title: "Design Excellence",
      des: "Meticulously crafting audio products that seamlessly blend captivating aesthetics with exceptional performance.",
    },
    {
      id: 6,
      img: "https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406865df34d5000d4e2ee_Green.svg",
      title: "Sustainability",
      des: "Guided by a commitment to environmental stewardship, we prioritize eco-friendly practices throughout our operations.",
    },
  ];
  return (
    <section className="flex flex-col gap-8">
      <div className="flex  items-center justify-between">
        {" "}
        <h2 className="text-4xl text-center font-black mt-4 ">Our Values</h2>
        <Link
          href="/shop"
          className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-gray-100 font-bold rounded-md"
        >
          View our Products
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {values.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 bg-white shadow-2xl rounded-3xl h-[17rem] py-8 px-4"
          >
            <Image
              width={1080}
              height={1080}
              className="w-10 h-10"
              src={item.img}
              alt=""
            />
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="w-80 text-gray-500">{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
