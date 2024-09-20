import React from "react";
import { cn } from "../../lib/utils";

interface TXTProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const TXT: React.FC<TXTProps> = ({ className, children, ...props }) => {
  return (
    <span className={cn("text-md lg:text-normal", className)} {...props}>
      {children}
    </span>
  );
};
