import { Logo } from "@/components/logo";
import USER from "@/data/user";
import { useTheme } from "./providers/theme";
import { cn } from "@/lib/utils";

export function Footer() {
  const { wallpaper } = useTheme();
  return (
    <footer className="flex flex-col items-center gap-2 p-6">
      <span className="font-thin z-10">
        &copy; {USER.name}, {new Date().getFullYear()}
      </span>
      <Logo
        className={cn(
          "size-8 z-10",
          wallpaper === "accent" ? "" : "text-primary"
        )}
      />
    </footer>
  );
}
