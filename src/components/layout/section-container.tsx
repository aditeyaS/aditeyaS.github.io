import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}) => {
  return (
    <section className="p-2 lg:p-4 rounded bg-foreground/10 hover:shadow hover:shadow-foreground/20">
      {children}
    </section>
  );
};
