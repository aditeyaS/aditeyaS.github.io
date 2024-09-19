import React from "react";
import { Modal, ModalBody, ModalTrigger } from "../../components/layout/modal";
import { TXT, TXT2 } from "../../components/ui";
import { Resume } from "../../icons";
import { cn } from "../../lib/utils";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";

export const OpportunitiesModel: React.FC = () => {
  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-2 bg-background px-2 py-1 rounded-2xl font-thin hover:underline">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Open for work
      </ModalTrigger>
      <ModalBody title="Job preferences">
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "flex justify-center font-medium py-0.5",
              "border border-green-500 text-green-500",
              "animate-bounce"
            )}
          >
            Open for work
          </div>
          <div className="flex gap-1 flex-wrap">
            <TXT>Job titles:</TXT>
            <TXT2>
              Software Engineer, Software Developer, Full Stack Developer, Web
              Developer
            </TXT2>
          </div>
          <div className="flex gap-1">
            <TXT>Location:</TXT>
            <TXT2>Anywhere in US</TXT2>
          </div>
          <div className="flex gap-1">
            <TXT>Relocation:</TXT>
            <TXT2>Willing to relocate</TXT2>
          </div>
          <div className="flex justify-center">
            <a
              href={USER_RESUME_URL}
              target="_blank"
              className="cursor-pointer text-sm border border-primary px-2 py-1 flex gap-1 items-center rounded hover:bg-primary"
            >
              <Resume />
              View Resume
            </a>
          </div>
          <p className="cursor-default flex justify-center items-center flex-wrap text-foreground/70">
            Liked my profile? Please message me on &nbsp;
            <a
              href={USER_LINKEDIN_URL}
              target="_blank"
              className="underline cursor-pointer"
            >
              LinkedIn
            </a>
            &nbsp;or drop me an&nbsp;
            <a
              href={`mailto:${USER_EMAIL}`}
              target="_blank"
              className="underline cursor-pointer"
            >
              email
            </a>
            .
          </p>
        </div>
      </ModalBody>
    </Modal>
  );
};
