import { getAllCategories } from "@/actions/category";
import ProductForm from "@/components/forms/productForm";
import { CategoryProps } from "@/types/type";

import React from "react";

export default async function page() {
  const categories: CategoryProps | any = await getAllCategories();
  return (
    <div className="p-6">
      <ProductForm categories={categories} />
    </div>
  );
}
