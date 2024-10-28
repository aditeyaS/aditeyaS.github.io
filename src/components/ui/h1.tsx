import React from "react";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
}) => {
  return (
    <h1 className="text-2xl text-foreground-2 cursor-default">{children}</h1>
  );
};
