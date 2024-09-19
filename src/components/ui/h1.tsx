import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H1: React.FC<H1Props> = ({ children }) => {
  return (
    <h1 className="text-2xl text-foreground/80 cursor-default">{children}</h1>
  );
};
