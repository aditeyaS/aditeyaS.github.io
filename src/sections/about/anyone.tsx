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
import { MagneticHover } from "../../components/layout/magnetic-hover";

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
        <MagneticHover>
          <div className="px-1 flex items-center gap-0.5 text-[#6F4E37]">
            <Hiking />
            Hiking
          </div>
        </MagneticHover>
        <TXT>•</TXT>
        <MagneticHover>
          <a className="px-1 flex items-center gap-0.5 hover:underline cursor-pointer text-[#1DB954]">
            <Spotify /> Music
          </a>
        </MagneticHover>
        <TXT>•</TXT>
        <MagneticHover>
          <div className="px-1 flex items-center gap-0.5 text-[#5A45FF]">
            <Travel /> Traveling
          </div>
        </MagneticHover>
        <TXT>•</TXT>
        <MagneticHover>
          <div className="px-1 flex items-center gap-0.5 text-[#C925D1]">
            <Gym /> Gym
          </div>
        </MagneticHover>
        <TXT>•</TXT>
        <MagneticHover>
          <a className="px-1 flex items-center gap-0.5 hover:underline cursor-pointer ">
            <Unsplash /> Photography
          </a>
        </MagneticHover>
        <TXT>•</TXT>
        <MagneticHover>
          <a className="px-1 flex items-center gap-0.5 hover:underline cursor-pointer text-[#ED1C24]">
            <Trakt /> Entertainment
          </a>
        </MagneticHover>
      </div>
    </div>
  );
};
