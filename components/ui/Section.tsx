import * as React from "react";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const toneMap = {
  default: "bg-aden-white text-aden-dark-gray",
  light: "bg-aden-light-gray text-aden-dark-gray",
  dark: "bg-aden-dark-blue text-aden-white",
} as const;

const sizeMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
} as const;

export function Section({
  className = "",
  tone = "default",
  size = "md",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={[toneMap[tone], sizeMap[size], className].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

export function Container({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={["mx-auto max-w-content px-4", className].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-title text-2xl md:text-3xl lg:text-4xl font-bold mb-6 whitespace-nowrap">{title}</h2>
      {description ? (
        <p className="text-lg text-aden-dark-gray mt-4 max-w-prose mx-auto font-body text-center">{description}</p>
      ) : null}
    </div>
  );
}
