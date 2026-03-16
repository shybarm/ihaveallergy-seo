"use client";

import * as React from "react";

function join(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={join(
          "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";