import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../lib/utils";
import { VariantProps, cva } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva(
  "inline-block rounded-md text-white shadow cursor-pointer font-medium",
  {
    variants: {
      variant: {
        primary: "bg-sky-500 hover:bg-sky-600",
        secondary: "bg-slate-500 hover:bg-slate-600",
        danger: "bg-red-500 hover:bg-red-600",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

console.log(buttonVariants({ size: "lg" }));
console.log(buttonVariants({ size: "sm" }));
console.log(buttonVariants({ size: "md" }));

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      // className={cn(
      //   `bg-sky-500 inline-block px-6 py-4 rounded-md text-white shadow cursor-pointer font-medium`,
      //   className,
      //   {
      //     "bg-slate-600": pending,
      //   }
      // )}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
