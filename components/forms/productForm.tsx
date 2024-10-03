"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { Options } from "react-tailwindcss-select/dist/components/type";
import { Category } from "@prisma/client";
import { Product } from "@prisma/client";
import { useForm } from "react-hook-form";
import ImageInput from "../formInputs/ImageInput";
import TextInput from "../formInputs/TextInput";
import TextArea from "../formInputs/TextAreaInput";
import { generateSlug } from "@/lib/generateSlug";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

import ShadSelectInput from "../formInputs/ShadSelectInput";
import NewButton from "../formInputs/NewButton";
import { createProduct, updateProductById } from "@/actions/product";

export type SelectOptionProps = {
  label: string;
  value: string;
};
export type ProductFormProps = {
  editingId?: string | undefined;
  initialData?: Product | undefined | null;
  categories: Category | undefined | null | any;
};

export default function ProductForm({
  categories,
  editingId,
  initialData,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.description,
    },
  });
  const [categoryId, setCategoryId] = useState<string>(
    initialData?.categoryId || ""
  );
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/placeholder.svg" || null;
  const [imageUrl, setImageUrl] = useState(initialImage);
  console.log(imageUrl);

  const options: Options = [
    { value: "true", label: "Active" },
    { value: "false", label: "Disabled" },
  ];

  async function saveProduct(data: any) {
    // console.log(data);
    data.categoryId = categoryId;
    try {
      setLoading(true);
      data.slug = generateSlug(data.title);

      if (editingId) {
        await updateProductById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/products");
        setImageUrl("/placeholder.svg");
      } else {
        await createProduct(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        setImageUrl("/placeholder.svg");
        //route
        router.push("/dashboard/products");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <form
      className="dark:bg-black/50 backdrop-blur-sm"
      onSubmit={handleSubmit(saveProduct)}
    >
      <FormHeader
        href="/dashboard/products"
        title="Product"
        editingId={editingId}
        loading={loading}
        parent=""
      />

      <div className="grid grid-cols-12 gap-6 py-4 dark:border-gray-900 dark:bg-black/50 backdrop-blur-sm">
        <div className="lg:col-span-8 col-span-full space-y-3 dark:border-gray-900 dark:bg-black/50 backdrop-blur-sm">
          <Card className="dark:bg-black/50 backdrop-blur-sm dark:border-gray-900">
            <CardHeader>
              <CardTitle>Product Title</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Product Title"
                    name="title"
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Product Price"
                    name="title"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Description"
                    name="description"
                  />
                </div>
                <div className="flex items-center gap-4 lg:gap-40 justify-between">
                  <div className="">
                    {categories && Array.isArray(categories) ? (
                      <ShadSelectInput
                        label="Choose Category"
                        optionTitle="select from below"
                        options={categories.map((category: any) => ({
                          value: category.id,
                          label: category.title,
                        }))}
                        selectedOption={categoryId}
                        setSelectedOption={setCategoryId}
                        initialData={initialData?.categoryId} // Pass initialData here
                      />
                    ) : (
                      <p className="text-red-600 text-sm">
                        No categories available
                      </p>
                    )}
                  </div>
                  <div className="mt-8">
                    <NewButton
                      href="/dashboard/category/new"
                      toolTipText="Add Category"
                      title="Add category"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full dark:border-gray-900 dark:bg-black/50 backdrop-blur-sm">
          <div className="grid auto-rows-max items-start gap-4 dark:border-gray-900 dark:bg-black/50 backdrop-blur-sm">
            <ImageInput
              title="Product Image"
              imageUrl={imageUrl as string}
              setImageUrl={setImageUrl}
              endpoint="productImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/dashboard/products"
        editingId={editingId}
        loading={loading}
        title="Product"
        parent=""
        // styles=""
      />
    </form>
  );
}
