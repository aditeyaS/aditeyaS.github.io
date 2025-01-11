import { Moon, Settings, Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Theme, useTheme, Wallpaper } from "../providers/theme";

const wallpaperList: Wallpaper[] = ["none", "accent", "particle", "wave"];

export function ThemeDialog() {
  const { theme, wallpaper, setTheme, setWallpaper } = useTheme();

  function handleWallpaperChange(w: Wallpaper) {
    setWallpaper(w);
  }

  function handleThemeChange(t: Theme) {
    if (t === "dark" || t === "light") {
      setTheme(t);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Change theme and accent color.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Theme</Label>
            <ToggleGroup
              type="single"
              size={"sm"}
              value={theme}
              className="grid grid-cols-2"
              onValueChange={(e) => handleThemeChange(e as Theme)}
            >
              <ToggleGroupItem value="dark" aria-label="Toggle dark theme">
                <Moon className="size-4" /> Dark
              </ToggleGroupItem>
              <ToggleGroupItem value="light" aria-label="Toggle light theme">
                <Sun className="size-4" /> Light
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Wallpaper</Label>
            <Select
              value={wallpaper}
              onValueChange={(e) => handleWallpaperChange(e as Wallpaper)}
            >
              <SelectTrigger>
                <SelectValue className="capitalize" placeholder={wallpaper} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {wallpaperList.map((w) => (
                    <SelectItem
                      className="capitalize"
                      key={`wallpaper-name-${w}`}
                      disabled={wallpaper === w}
                      value={w}
                    >
                      {w}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
