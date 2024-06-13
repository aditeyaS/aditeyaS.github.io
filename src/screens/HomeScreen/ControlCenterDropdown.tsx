import React, { useState } from "react";
import {
  BluetoothIcon,
  NextIcon,
  PlayIcon,
  PreviousIcon,
  WiFiIcon,
} from "../../icons/system";
import songArt from "../../assets/others/song.jpg";

export const ControlCenterDropdown: React.FC = () => {
  const [volume, setVolume] = useState<number>(100);
  const [brightness, setBrightness] = useState<number>(80);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex justify-start items-center gap-2 bg-base-200 bg-opacity-45 p-2 rounded-md">
          <div className="p-2 rounded-full bg-info">
            <WiFiIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Wi-Fi</span>
            <span className="text-neutral text-xs">AppleHQ</span>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 bg-base-200 bg-opacity-45 p-2 rounded-md">
          <div className="p-2 rounded-full bg-info">
            <BluetoothIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Bluetooth</span>
            <span className="text-neutral text-xs">On</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 bg-base-200 bg-opacity-45 p-2 rounded-md">
        <span className="text-xs">Display</span>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={brightness}
          onChange={(e) => setBrightness(+e.target.value)}
          className="range range-base-content"
        />
      </div>
      <div className="flex flex-col gap-1 bg-base-200 bg-opacity-45 p-2 rounded-md">
        <span className="text-xs">Sound</span>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={volume}
          onChange={(e) => setVolume(+e.target.value)}
          className="range range-base-content"
        />
      </div>
      <div className="flex flex-row items-center gap-1 bg-base-200 bg-opacity-45 p-2 rounded-md">
        <img className="w-16 h-16" src={songArt} alt="Album art" />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm">Never Gonna Give You Up</span>
          <span className="text-neutral text-xs">Rick Astley</span>
          <div className="flex justify-around">
            <PreviousIcon />
            <PlayIcon />
            <NextIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
