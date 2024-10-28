import React from "react";
import { cn } from "../../lib/utils";

export const TXT2: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
}) => {
  return <span className={cn("text-foreground-2", className)}>{children}</span>;
};
