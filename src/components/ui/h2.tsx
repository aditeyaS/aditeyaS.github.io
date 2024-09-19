import React from "react";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H2: React.FC<H2Props> = ({ children }) => {
  return <h2 className="text-md text-primary cursor-default">{children}</h2>;
};
