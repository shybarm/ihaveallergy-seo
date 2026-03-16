"use client";

import * as React from "react";

type ButtonVariant = "default" | "outline";
type ButtonSize = "default" | "lg" | "sm";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

function join(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function variantClasses(variant: ButtonVariant) {
  if (variant === "outline") {
    return "border border-border bg-background text-foreground hover:bg-accent";
  }

  return "bg-primary text-primary-foreground hover:opacity-90";
}

function sizeClasses(size: ButtonSize) {
  if (size === "lg") return "h-12 px-6 text-base";
  if (size === "sm") return "h-9 px-3 text-sm";
  return "h-10 px-4 text-sm";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = join(
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
      variantClasses(variant),
      sizeClasses(size),
      className,
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: join(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";