"use client";

import { useFormStatus } from "react-dom";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormSubmitProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
}

export const FormSubmit = ({
  children,
  className,
  disabled,
  variant = "primary",
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      disabled={pending || disabled}
      type="submit"
      size={"sm"}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
