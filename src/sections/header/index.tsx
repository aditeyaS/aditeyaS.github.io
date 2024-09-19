import React from "react";
import { Verified } from "../../icons";
import { SectionContainer } from "../../components/layout/section-container";
import { ContactInfoModal } from "./contact-info-modal";
import { OpportunitiesModel } from "./opportunities-model";

export const Header: React.FC = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center gap-2">
        <img className="w-48 h-48" srcSet="profile.png" />
        <div className="flex gap-1 items-center">
          <span className="text-2xl">Aditeya (Adi) Srivastava</span>
          <Verified />
        </div>
        <span>Software Engineer • Ex-Deloitte</span>
        <div className="flex gap-1">
          <div>
            <span className="font-thin">United States 🇺🇸</span>
          </div>
          <span>•</span>
          <ContactInfoModal />
        </div>
        <OpportunitiesModel />
      </div>
    </SectionContainer>
  );
};
