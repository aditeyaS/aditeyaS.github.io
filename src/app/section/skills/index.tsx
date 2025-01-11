import { Code } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../../providers/scroll";
import { useState } from "react";
import { Chip } from "@/components/chip";
import { FE } from "./fe";
import { Cloud } from "./cloud";
import { BE } from "./be";
import { Language } from "./languages";
import { Others } from "./others";
import { Testing } from "./testing";
import { Current } from "./current";

type Tab =
  | "current"
  | "languages"
  | "front-end"
  | "back-end"
  | "cloud"
  | "testing"
  | "others";

const tabs: Tab[] = [
  "current",
  "languages",
  "front-end",
  "back-end",
  "cloud",
  "testing",
  "others",
];

export default function Skills() {
  const { appSectionRefs } = useAppScroll();

  const [viewerType, setViewerType] = useState<Tab>("current");

  return (
    <Section ref={appSectionRefs.skills}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <Code />
          Skills
        </SectionHeader>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center flex-wrap">
            {tabs.map((t) => (
              <Chip
                key={t}
                onClick={() => setViewerType(t)}
                selected={viewerType === t}
              >
                {t}
              </Chip>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {viewerType === "current" && <Current />}
            {viewerType === "languages" && <Language />}
            {viewerType === "front-end" && <FE />}
            {viewerType === "back-end" && <BE />}
            {viewerType === "cloud" && <Cloud />}
            {viewerType === "testing" && <Testing />}
            {viewerType === "others" && <Others />}
          </div>
        </div>
      </div>
    </Section>
  );
}
