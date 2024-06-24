import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <div
      className={twMerge(
        `bg-sky-500 inline-block px-6 py-4 rounded-md text-white shadow cursor-pointer font-medium`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
