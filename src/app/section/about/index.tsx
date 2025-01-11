import { Info } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../../providers/scroll";
import { useState } from "react";
import { Chip } from "@/components/chip";
import { Anyone } from "./anyone";
import { Recruiter } from "./recruiter";
import { Engineer } from "./engineer";

type Tab = "anyone" | "recruiter" | "manager" | "engineer";
const tabs: Tab[] = ["anyone", "recruiter", "manager", "engineer"];

export default function About() {
  const { appSectionRefs } = useAppScroll();

  const [viewerType, setViewerType] = useState<Tab>("anyone");

  return (
    <Section ref={appSectionRefs.about}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <Info /> About
        </SectionHeader>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center flex-wrap">
            <span className="text-xs text-muted-foreground">For</span>
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
          {viewerType === "anyone" && <Anyone />}
          {viewerType === "recruiter" && <Recruiter />}
          {viewerType === "manager" && <Recruiter />}
          {viewerType === "engineer" && <Engineer />}
        </div>
      </div>
    </Section>
  );
}
