import React, { Suspense } from "react";
import { useTheme } from "../providers/theme";
import { Accent } from "./accent";

const P = React.lazy(() => import("./particle"));
function Particle() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <P />
    </Suspense>
  );
}

const W = React.lazy(() => import("./wave"));
function Wave() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <W />
    </Suspense>
  );
}

export default function Wallpapers() {
  const { wallpaper } = useTheme();
  if (wallpaper === "accent") return <Accent />;
  if (wallpaper === "particle") return <Particle />;
  if (wallpaper === "wave") return <Wave />;
}
