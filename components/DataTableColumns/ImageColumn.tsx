import Image from "next/image";
import React from "react";

export default function ImageColumn({
  row,
  accessorKey,
}: {
  row: any;
  accessorKey: any;
}) {
  const imageUrl = row.getValue(`${accessorKey}`);
  // const thum = row.getValue(`${accessorKey}`);
  // console.log(imageUrl);
  return (
    <div className="shrink-0">
      <Image
        src={imageUrl}
        width={500}
        height={500}
        alt={`${accessorKey}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
}
