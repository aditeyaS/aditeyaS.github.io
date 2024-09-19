import React from "react";
import { cn } from "../../lib/utils";

interface TXTProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const TXT: React.FC<TXTProps> = ({ className, children }) => {
  return <span className={cn("", className)}>{children}</span>;
};
