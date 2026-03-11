import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "soft" | "dark";
  children: React.ReactNode;
};

const variants: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-aden-white border border-aden-mid-grey",
  soft: "bg-aden-light-gray border border-aden-mid-grey",
  dark: "bg-aden-dark-blue border border-aden-dark-blue text-aden-white",
};

export default function Card({
  className = "",
  variant = "default",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl p-6 md:p-8",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={["font-title text-xl text-aden-dark-blue", className].join(" ")}
      {...props}
    />
  );
}

export function CardText({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={["mt-2 text-aden-dark-gray", className].join(" ")}
      {...props}
    />
  );
}
