import React from "react";
import {
  Gym,
  Hiking,
  Quote,
  Spotify,
  Trakt,
  Travel,
  Unsplash,
} from "../../icons";
import { TXT, TXT2 } from "../../components/ui";

export const Anyone: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 border border-primary rounded-xl p-2 lg:p-4">
        <Quote />
        <blockquote className="font-code font-light">
          “Always believe in yourself. No matter who’s around you being negative
          or thrusting negative energy at you, totally block it off. Because
          whatever you believe, you become.”
        </blockquote>
        <TXT2>— Michael Jackson</TXT2>
      </div>
      <div className="flex gap-1 items-center flex-wrap">
        <TXT>Hobbies:</TXT>
        <div
          style={{ borderColor: "#6F4E37", color: "#6F4E37" }}
          className="px-1 rounded-lg border flex items-center gap-1"
        >
          <Hiking /> Hiking
        </div>
        <a
          style={{ borderColor: "#1DB954", color: "#1DB954" }}
          className="px-1 rounded-lg border flex items-center gap-1 hover:underline cursor-pointer"
        >
          <Spotify /> Music
        </a>
        <div
          style={{ borderColor: "#5A45FF", color: "#5A45FF" }}
          className="px-1 rounded-lg border flex items-center gap-1"
        >
          <Travel /> Traveling
        </div>
        <div
          style={{ borderColor: "#C925D1", color: "#C925D1" }}
          className="px-1 rounded-lg border flex items-center gap-1"
        >
          <Gym /> Gym
        </div>
        <a className="px-1 rounded-lg border border-foreground flex items-center gap-1 hover:underline cursor-pointer">
          <Unsplash /> Photography
        </a>
        <a
          style={{ borderColor: "#ED1C24", color: "#ED1C24" }}
          className="px-1 rounded-lg border flex items-center gap-1 hover:underline"
        >
          <Trakt /> Entertainment
        </a>
      </div>
    </div>
  );
};
