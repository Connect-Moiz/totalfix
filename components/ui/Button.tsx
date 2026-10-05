import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "green" | "red" | "black" | "outline" | "white" | "navcolor";

const variants: Record<Variant, string> = {
  green: "bg-green text-white hover:bg-green-dark",
  red: "bg-red text-white hover:bg-red-dark",
  black: "bg-black text-white hover:bg-ink",
  outline: "border border-white text-white hover:bg-black hover:text-white hover:border-black",
  navcolor: "border border-black text-black hover:bg-black hover:text-white",
  white: "bg-white text-ink hover:bg-green-tint",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export default function Button({ variant = "green", className = "", external, children, ...props }: Props) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      {...externalProps}
      {...props}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
