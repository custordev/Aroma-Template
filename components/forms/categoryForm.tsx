"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormHeader from "./FormHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { createCategory, updateCategoryById } from "@/actions/category";
import toast from "react-hot-toast";

import { Options } from "react-tailwindcss-select/dist/components/type";
import { Category } from "@prisma/client";
import FormFooter from "./FormFooter";
import TextInput from "../formInputs/TextInput";
import TextArea from "../formInputs/TextAreaInput";
import { generateSlug } from "@/lib/generateSlug";
import { CategoryProps } from "@/types/type";
import ImageInput from "../formInputs/ImageInput";

export type SelectOptionProps = {
  label: string;
  value: string;
};
type CategoryFormProps = {
  editingId?: string | undefined;
  initialData?: Category | undefined | null;
};
export default function CategoryForm({
  editingId,
  initialData,
}: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryProps>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.title,
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/placeholder.svg";
  const [imageUrl, setImageUrl] = useState(initialImage);

  const options: Options = [
    { value: "true", label: "Active" },
    { value: "false", label: "Disabled" },
  ];

  async function saveCategory(data: CategoryProps) {
    // console.log(data);
    try {
      setLoading(true);
      data.slug = generateSlug(data.title);

      if (editingId) {
        await updateCategoryById(editingId, data);
        setLoading(false);
        // Toast
        toast.success("Updated Successfully!");
        //reset
        reset();
        //route
        router.push("/dashboard/inventory/categories");
        setImageUrl("/placeholder.svg");
      } else {
        await createCategory(data);
        setLoading(false);
        // Toast
        toast.success("Successfully Created!");
        //reset
        reset();
        setImageUrl("/placeholder.svg");
        //route
        router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveCategory)}>
      <FormHeader
        href="/categories"
        title="Category"
        editingId={editingId}
        loading={loading}
        parent=""
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Category Title</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Category Title"
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
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            <ImageInput
              title="Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="categoryImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/categories"
        editingId={editingId}
        loading={loading}
        title="Category"
        parent=""
      />
    </form>
  );
}
