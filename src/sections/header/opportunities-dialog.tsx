import React from "react";
import { TXT, TXT2 } from "../../components/ui";
import { Resume } from "../../icons";
import { cn } from "../../lib/utils";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";
import { MagneticHover } from "../../components/layout/magnetic-hover";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

export const OpportunitiesDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="flex items-center gap-2 border border-primary px-2 py-1 rounded-2xl font-thin hover:underline border"
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-100"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
          </span>
          Open for work
        </motion.button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Job Preferences</DialogTitle>
          <DialogDescription>My job preferences.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "flex justify-center font-medium py-0.5",
              "border border-green text-green"
            )}
          >
            Open for work
          </div>
          <span>
            <TXT2>Job titles:</TXT2>
            <TXT className="ml-1">
              Software Engineer, Software Developer, Full Stack Developer, Web
              Developer
            </TXT>
          </span>
          <span>
            <TXT2>Location:</TXT2>
            <TXT className="ml-1">Anywhere in US 🇺🇸</TXT>
          </span>
          <span>
            <TXT2>Relocation:</TXT2>
            <TXT className="ml-1">Willing to relocate</TXT>
          </span>
          <div className="flex justify-center">
            <MagneticHover>
              <a
                href={USER_RESUME_URL}
                target="_blank"
                className="cursor-pointer text-sm border border-primary px-2 py-1 flex gap-1 items-center rounded hover:bg-primary"
              >
                <Resume />
                View Resume
              </a>
            </MagneticHover>
          </div>
          <p className="cursor-default flex justify-center items-center flex-wrap text-foreground-2">
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
      </DialogContent>
    </Dialog>
  );
};
