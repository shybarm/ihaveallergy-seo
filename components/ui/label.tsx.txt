"use client";

import * as React from "react";

function join(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={join("text-sm font-medium text-foreground", className)}
        {...props}
      />
    );
  },
);

Label.displayName = "Label";