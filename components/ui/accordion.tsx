"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

type AccordionType = "single" | "multiple";

type AccordionContextValue = {
  type: AccordionType;
  collapsible: boolean;
  openItems: string[];
  toggleItem: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<{ value: string } | null>(null);

function join(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type AccordionProps = {
  type?: AccordionType;
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Accordion({
  type = "single",
  collapsible = false,
  className,
  children,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const isOpen = prev.includes(value);

        if (type === "single") {
          if (isOpen) {
            return collapsible ? [] : prev;
          }
          return [value];
        }

        if (isOpen) {
          return prev.filter((item) => item !== value);
        }

        return [...prev, value];
      });
    },
    [type, collapsible],
  );

  return (
    <AccordionContext.Provider
      value={{ type, collapsible, openItems, toggleItem }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

export function AccordionItem({
  value,
  className,
  children,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={join("border-b border-border", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) return null;

  const isOpen = accordion.openItems.includes(item.value);

  return (
    <button
      type="button"
      className={join(
        "flex w-full items-center justify-between py-4 text-right font-medium text-foreground",
        className,
      )}
      onClick={() => accordion.toggleItem(item.value)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={join(
          "h-4 w-4 shrink-0 transition-transform",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}

type AccordionContentProps = {
  className?: string;
  children: React.ReactNode;
};

export function AccordionContent({
  className,
  children,
}: AccordionContentProps) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) return null;

  const isOpen = accordion.openItems.includes(item.value);

  if (!isOpen) return null;

  return <div className={join("pb-4", className)}>{children}</div>;
}