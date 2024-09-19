import React from "react";
import { Verified } from "../../icons";
import { SectionContainer } from "../../components/layout/section-container";
import { ContactInfoModal } from "./contact-info-modal";
import { OpportunitiesModel } from "./opportunities-model";
import { TXT } from "../../components/ui";

export const Header: React.FC = () => {
  return (
    <SectionContainer sectionIndex={0}>
      <div className="flex flex-col items-center gap-2">
        <img className="w-48 h-48" srcSet="profile.png" />
        <div className="flex gap-1 items-center">
          <span className="text-2xl">Aditeya (Adi) Srivastava</span>
          <Verified />
        </div>
        <TXT>Software Engineer • Ex-Deloitte</TXT>
        <div className="flex gap-1 flex-wrap">
          <TXT>United States 🇺🇸</TXT>
          <TXT>•</TXT>
          <ContactInfoModal />
        </div>
        <OpportunitiesModel />
      </div>
    </SectionContainer>
  );
};
