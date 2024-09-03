"use client";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import TextInput from "../formInputs/TextInput";
import PasswordInput from "../formInputs/PasswordInput";
import SubmitButton from "../formInputs/SubmitBtn";
import { LoginProps } from "@/types/type";
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginProps>();
  const params = useSearchParams();
  const returnUrl = params.get("returnUrl") || "/shop";
  const [passErr, setPassErr] = useState("");
  const router = useRouter();

  async function onSubmit(data: LoginProps) {
    try {
      setLoading(true);
      setPassErr("");
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setPassErr("Wrong Credentials, Check again");
        // setShowNotification(true);
      } else {
        // Sign-in was successful
        // setShowNotification(false);
        reset();
        setLoading(false);
        toast.success("Login Successful");
        setPassErr("");
        router.push(returnUrl);
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
  return (
    <div className="w-full py-5 lg:px-8 px-6">
      <div className="">
        <div className="py-4">
          <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Login in to your account
          </h2>
          <p className="text-xs">Welcome Back, fill in details to login</p>
        </div>
      </div>
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            register={register}
            errors={errors}
            label="Email Address"
            name="email"
            icon={Mail}
            placeholder="email"
          />
          <PasswordInput
            register={register}
            errors={errors}
            label="Password"
            name="password"
            icon={Lock}
            placeholder="password"
          />
          {passErr && <p className="text-red-500 text-xs">{passErr}</p>}
          <div>
            <SubmitButton
              title="Sign In"
              loadingTitle="Loading Please wait.."
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
        <p className="mt-6  text-sm text-gray-500">
          Not a Registered ?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
