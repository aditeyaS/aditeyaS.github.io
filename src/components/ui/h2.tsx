import React from "react";

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
}) => {
  return (
    <h2 className="text-primary font-medium cursor-default">{children}</h2>
  );
};
