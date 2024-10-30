import React from "react";
import { Moon, Pallette, Sun } from "../../icons";
import { Accent, useTheme, Wallpaper } from "../../components/theme-provider";
import { cn } from "../../lib/utils";
import { TXT } from "../../components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

type AccentListType = {
  accent: Accent;
  color: string;
};
export const accentList: AccentListType[] = [
  { accent: "purple", color: "#8338EC" },
  { accent: "yellow", color: "#FFBE0B" },
  { accent: "orange", color: "#FB5607" },
  { accent: "pink", color: "#FF006E" },
  { accent: "blue", color: "#3A86FF" },
  { accent: "green", color: "#2ECC71" },
];

const wallpaperList: Wallpaper[] = [
  "none",
  "accent",
  "particle",
  "wave",
  "ripple",
];

export const ThemeDialog: React.FC = () => {
  const { theme, accent, wallpaper, setTheme, setAccent, setWallpaper } =
    useTheme();

  const onWallpaperChange = (wallpaper: Wallpaper) => {
    setWallpaper(wallpaper);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded bg-primary p-2">
          <Pallette />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>App Theme</DialogTitle>
          <DialogDescription>Change theme and accent color.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <TXT>Theme</TXT>
          <div className="grid grid-flow-col justify-stretch border border-primary rounded">
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex justify-center gap-1 items-center py-1",
                `${theme === "dark" && "bg-primary"}`
              )}
            >
              <Moon />
              <TXT>Dark</TXT>
            </button>
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex justify-center gap-1 items-center py-1 ",
                `${theme === "light" && "bg-primary"}`
              )}
            >
              <Sun />
              <TXT>Light</TXT>
            </button>
          </div>
          <TXT>Accent</TXT>
          <div className="flex gap-1">
            {accentList.map((a) => (
              <button
                key={a.accent}
                onClick={() => setAccent(a.accent)}
                className={`w-6 h-6 rounded-full ${
                  accent === a.accent && "border border-2 border-foreground"
                }`}
                style={{ background: a.color }}
              ></button>
            ))}
          </div>
          <TXT>Wallpaper</TXT>
          <select
            className="py-2 px-0.5 bg-background border border-primary rounded capitalize"
            value={wallpaper}
            onChange={(e) => onWallpaperChange(e.target.value as Wallpaper)}
          >
            {wallpaperList.map((w) => (
              <option key={`wallpaper-name-${w}`} disabled={wallpaper === w}>
                {w}
              </option>
            ))}
          </select>
        </div>
      </DialogContent>
    </Dialog>
  );
};
