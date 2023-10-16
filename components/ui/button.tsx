"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  text?: string;
  color?: boolean;
  onClick?: () => void;
}
const Button = ({ text, children, color, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center px-3 py-2 gap-2 bg-white text-black font-semibold rounded-md cursor-pointer",
        color && "text-white bg-[#c2c1c1]"
      )}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
