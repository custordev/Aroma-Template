"use client";
import { Eye, EyeOff, Headset, Loader2, Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { userProps } from "@/types/type";
import TextInput from "../formInputs/TextInput";
import SubmitButton from "../formInputs/SubmitBtn";
import PasswordInput from "../formInputs/PasswordInput";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { createUser } from "@/actions/user";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<userProps>();
  const router = useRouter();
  async function onSubmit(data: userProps) {
    setLoading(true);
    data.name = `${data.firstName} ${data.lastName}`;

    data.image =
      "https://utfs.io/f/59b606d1-9148-4f50-ae1c-e9d02322e834-2558r.png";

    try {
      const res = await createUser(data);
      if (res?.status === 409) {
        setLoading(false);
        setEmailErr(res.error);
      } else if (res?.status === 200) {
        setLoading(false);
        toast.success("Account Created successfully");
        router.push("/login");
      } else {
        setLoading(false);
        toast.error("Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong, try again");
    }
  }
  return (
    <div className="w-full py-5 lg:px-8 px-6">
      <div className="">
        <div className="py-4">
          <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Create an account
          </h2>
          <p className="text-xs">Join Us, fill in details to login</p>
        </div>
      </div>
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              register={register}
              errors={errors}
              label="First Name"
              name="firstName"
              icon={User}
              placeholder="first Name"
            />
            <TextInput
              register={register}
              errors={errors}
              label="Last Name"
              name="lastName"
              icon={User}
              placeholder="last Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              register={register}
              errors={errors}
              label="Phone"
              name="phone"
              icon={Headset}
              placeholder="phone"
            />
            <TextInput
              type="email"
              register={register}
              errors={errors}
              label="Email Address"
              name="email"
              icon={Mail}
              placeholder="email"
            />
            {emailErr && (
              <p className="text-red-500 text-xs mt-2">{emailErr}</p>
            )}
          </div>
          <PasswordInput
            register={register}
            errors={errors}
            label="Password"
            name="password"
            icon={Lock}
            placeholder="password"
            type="password"
          />
          <div>
            <SubmitButton
              title="Sign Up"
              loadingTitle="Creating Please wait.."
              loading={loading}
              className="w-full"
              loaderIcon={Loader2}
              showIcon={false}
            />
          </div>
        </form>
        <div className="flex mt-3 items-center justify-center">
          <div className="font-bold">OR</div>
        </div>
        <div className="flex gap-2 justify-between">
          <button
            onClick={() => signIn("google")}
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <FcGoogle className="w-6 h-6" />
            Login with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <FaGithub className="w-6 h-6" />
            Login with Github
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Alrealy Registered ?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
