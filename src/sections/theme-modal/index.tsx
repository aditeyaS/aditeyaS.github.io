import React from "react";
import { Modal, ModalBody, ModalTrigger } from "../../components/layout/modal";
import { Moon, Pallette, Sun } from "../../icons";
import { Accent, useTheme } from "../../components/theme-provider";
import { cn } from "../../lib/utils";
import { TXT, TXT2 } from "../../components/ui";

type AccentListType = {
  accent: Accent;
  color: string;
};
const accentList: AccentListType[] = [
  { accent: "red", color: "#EE4B2B" },
  { accent: "green", color: "#2ECC71" },
  { accent: "blue", color: "#0096FF" },
];

export const ThemeModal: React.FC = () => {
  const { theme, accent, setTheme, setAccent } = useTheme();
  return (
    <Modal>
      <ModalTrigger className="z-10 rounded-full fixed bg-primary bottom-0 left-0 m-4 p-2">
        <Pallette />
      </ModalTrigger>
      <ModalBody title="Contact Info">
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
              <TXT2>Dark</TXT2>
            </button>
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex justify-center gap-1 items-center py-1 ",
                `${theme === "light" && "bg-primary"}`
              )}
            >
              <Sun />
              <TXT2>Light</TXT2>
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
        </div>
      </ModalBody>
    </Modal>
  );
};
