import React from "react";
import { Verified } from "../../icons";
import { SectionContainer } from "../../components/layout/section-container";
import { TXT } from "../../components/ui";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";
import { ContactInfoDialog } from "./contact-info-dialog";
import { OpportunitiesDialog } from "./opportunities-dialog";

export const Header: React.FC<SectionProps> = ({ sectionIndex }) => {
  const { appSectionRefs } = useAppScroll();

  return (
    <SectionContainer sectionIndex={sectionIndex} ref={appSectionRefs.intro}>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-primary/25 rounded rounded-full ring ring-primary ring-offset-4 ring-offset-background">
          <img className="w-48 h-48 rounded rounded-full" srcSet="avatar.png" />
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-2xl">Aditeya (Adi) Srivastava</span>
          <Verified />
        </div>
        <TXT>Software Engineer • Ex-Deloitte</TXT>
        <div className="flex gap-1 flex-wrap">
          <TXT>United States 🇺🇸</TXT>
          <TXT>•</TXT>
          <ContactInfoDialog />
        </div>
        <OpportunitiesDialog />
      </div>
    </SectionContainer>
  );
};
