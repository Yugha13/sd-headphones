"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
}

function AnimatedText({ children }: AnimatedTextProps) {
  return (
    <span className="relative overflow-hidden inline-block leading-none">
      <span className="inline-block transition-transform duration-300 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
        {children}
      </span>
    </span>
  );
}

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a";
  href?: string;
  size?: "sm" | "md" | "lg";
}

export default function PrimaryButton({
  children,
  className,
  as = "a",
  href,
  size = "lg",
  ...props
}: PrimaryButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const Component = as as any;
  const sizeClasses = {
    sm: "h-9 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-9 text-sm",
  };

  return (
    <Component
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black font-medium leading-none transition-colors",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <AnimatedText>{children}</AnimatedText>
    </Component>
  );
}
