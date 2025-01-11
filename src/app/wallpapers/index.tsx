import { useTheme } from "../providers/theme";
import { Accent } from "./accent";
import { Particle } from "./particle";
import { Wave } from "./wave";

export default function Wallpapers() {
  const { wallpaper } = useTheme();
  if (wallpaper === "accent") return <Accent />;
  if (wallpaper === "particle") return <Particle />;
  if (wallpaper === "wave") return <Wave />;
}
