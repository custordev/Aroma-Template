import React from "react";

import DataTable from "@/components/DataTableComponents/DataTable";
import PageHeader from "@/components/backend/PageHeader";

import { Product } from "@prisma/client";
import { getAllProducts } from "@/actions/product";
import { columns } from "./columns";

export default async function page() {
  const products: Product[] = (await getAllProducts()) || [];
  return (
    <div className="p-8">
      <PageHeader
        title="Products"
        href="/dashboard/products/new"
        linkText="Add Product"
      />

      <div className="py-8">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
