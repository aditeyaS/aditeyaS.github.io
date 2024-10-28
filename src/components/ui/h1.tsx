import React from "react";

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
}) => {
  return <h1 className="text-4xl font-bold cursor-default">{children}</h1>;
};
