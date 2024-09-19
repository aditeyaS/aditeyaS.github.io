import React from "react";
import { MagneticHover } from "../../components/layout/magnetic-hover";
import { cn } from "../../lib/utils";

interface MagneticLinksProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  link: string;
  color: string;
}

export const MagneticLinks: React.FC<MagneticLinksProps> = ({
  icon,
  link,
  color,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        `text-[${color}]`,
        "cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
      )}
    >
      <MagneticHover>{icon}</MagneticHover>
    </a>
  );
};
