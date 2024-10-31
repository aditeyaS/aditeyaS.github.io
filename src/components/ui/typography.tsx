import React from "react";
import { cn } from "../../lib/utils";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
}) => {
  return <h1 className="text-4xl font-bold cursor-default">{children}</h1>;
};

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
}) => {
  return (
    <h2 className="text-primary font-medium cursor-default">{children}</h2>
  );
};

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

export const TXT2: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
}) => {
  return <span className={cn("text-foreground-2", className)}>{children}</span>;
};
