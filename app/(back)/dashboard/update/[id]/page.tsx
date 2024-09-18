import { getCategoryById } from "@/actions/category";
import CategoryForm from "@/components/forms/categoryForm";
import React from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const category = await getCategoryById(id);
  return (
    <div className="p-6">
      <CategoryForm initialData={category} />
    </div>
  );
}
