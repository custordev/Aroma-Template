import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { CircleHelp } from "lucide-react";
import React from "react";
export type PasswordInputProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  icon?: any;
  placeholder?: string;
  type?: string;
};
export default function PasswordInput({
  register,
  errors,
  label,
  name,
  icon,
  placeholder,
  type = "text",
}: PasswordInputProps) {
  const Icon = icon;
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button>
                <CircleHelp className="w-4 h-4 text-slate-500" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="mt-2">
        <div className="relative rounded-md ">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="text-slate-300 w-4 h-4" />
            </div>
          )}
          <input
            id={name}
            type={type}
            {...register(`${name}`, { required: true })}
            className={cn(
              "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm",
              (errors[`${name}`] && "focus:ring-red-500 pl-8") ||
                (icon && "pl-8")
            )}
            placeholder={placeholder || label}
          />

          <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
            {name}
          </p>
        </div>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
