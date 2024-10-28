import React from "react";
import { cn } from "../../lib/utils";

export const TXT: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span className={cn("text-md lg:text-normal", className)} {...props}>
      {children}
    </span>
  );
};
