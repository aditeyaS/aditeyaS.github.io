import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Section = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => {
  return (
    <section
      className="p-4 lg:p-6 rounded-md bg-card border z-10 opacity-95"
      ref={ref}
    >
      {children}
    </section>
  );
});
Section.displayName = "Section";

function SectionHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-2 [&_svg]:size-4", className)}
      {...props}
    />
  );
}

export { Section, SectionHeader };
