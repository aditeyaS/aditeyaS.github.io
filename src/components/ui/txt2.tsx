import React from "react";
import { cn } from "../../lib/utils";

interface TXT2Props extends React.HTMLAttributes<HTMLSpanElement> {}

export const TXT2: React.FC<TXT2Props> = ({ className, children }) => {
  return (
    <span className={cn("text-foreground/70", className)}>{children}</span>
  );
};
