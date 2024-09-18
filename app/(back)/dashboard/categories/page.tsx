import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/DataTableComponents/DataTable";
import PageHeader from "@/components/backend/PageHeader";

import { Category } from "@prisma/client";
import { getAllCategories } from "@/actions/category";

export default async function page() {
  const categories: Category[] = (await getAllCategories()) || [];
  return (
    <div className="p-8">
      <PageHeader
        title="Categories"
        href="/dashboard/categories/new"
        linkText="Add Category"
      />

      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
