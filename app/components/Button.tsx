import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  pending?: boolean;
}

const Button = ({ children, className, pending }: ButtonProps) => {
  return (
    <div
      className={cn(
        `bg-sky-500 inline-block px-6 py-4 rounded-md text-white shadow cursor-pointer font-medium`,
        className,
        {
          "bg-slate-600": pending,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Button;
