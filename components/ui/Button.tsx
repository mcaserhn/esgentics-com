import * as React from "react";

type ButtonVariant = "primary" | "dark" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl transition " +
  "focus:outline-none focus:ring-2 focus:ring-aden-digital-blue focus:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-7 text-base",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-aden-orange text-aden-white hover:opacity-90",
  dark: "bg-aden-dark-blue text-aden-white hover:opacity-90",
  ghost: "bg-transparent text-aden-dark-blue hover:bg-aden-light-gray",
  outline:
    "bg-transparent text-aden-dark-blue border border-aden-mid-grey hover:bg-aden-light-gray",
};

export default function Button({
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        base,
        sizes[size],
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
