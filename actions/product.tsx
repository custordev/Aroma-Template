"use server";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getProductById(id: string) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
      include: {
        category: {
          select: {
            title: true,
          },
        },
      },
    });
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts() {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: {
          select: {
            title: true,
          },
        },
      },
    });

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createProduct(data: any) {
  const slug = data.slug;
  try {
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return existingProduct;
    }
    const newProduct = await db.product.create({
      data,
    });
    // console.log(newProduct);
    revalidatePath("/dashboard/inventory/products");
    return newProduct;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProductById(id: string, data: Product) {
  try {
    const updatedProduct = await db.product.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/inventory/products");
    return updatedProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const deletedProduct = await db.product.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedProduct,
    };
  } catch (error) {
    console.log(error);
  }
}
