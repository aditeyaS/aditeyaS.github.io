import React, { useState } from "react";
import { SectionContainer } from "../../components/layout/section-container";
import { Chip, H1, TXT } from "../../components/ui";
import { Icon } from "./icon";
import { motion } from "framer-motion";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";
import {
  BACKEND_LIST,
  CLOUD_LIST,
  FRONT_END_LIST,
  LANGUAGE_LIST,
  OTHERS_LIST,
  TESTING_LIST,
} from "./data";

export const Skills: React.FC<SectionProps> = ({ sectionIndex }) => {
  const [viewerType, setViewerType] = useState<
    "languages" | "fe" | "be" | "cloud" | "testing" | "others"
  >("languages");

  const { appSectionRefs } = useAppScroll();

  return (
    <SectionContainer sectionIndex={sectionIndex} ref={appSectionRefs.skills}>
      <section className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-foreground-2">
          <Icon />
          <H1>Skills</H1>
        </div>
        <div className="flex gap-1 items-center flex-wrap">
          <Chip
            selected={viewerType === "languages"}
            onClick={() => setViewerType("languages")}
          >
            languages
          </Chip>
          <Chip
            selected={viewerType === "fe"}
            onClick={() => setViewerType("fe")}
          >
            front-end
          </Chip>
          <Chip
            selected={viewerType === "be"}
            onClick={() => setViewerType("be")}
          >
            back-end
          </Chip>
          <Chip
            selected={viewerType === "cloud"}
            onClick={() => setViewerType("cloud")}
          >
            cloud
          </Chip>
          <Chip
            selected={viewerType === "testing"}
            onClick={() => setViewerType("testing")}
          >
            testing
          </Chip>
          <Chip
            selected={viewerType === "others"}
            onClick={() => setViewerType("others")}
          >
            others
          </Chip>
        </div>
        <div className="font-light font-code flex gap-1 flex-wrap justify-stretch">
          {viewerType === "languages" &&
            LANGUAGE_LIST.map((l, index) => (
              <motion.div
                key={`skill-language-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "fe" &&
            FRONT_END_LIST.map((l, index) => (
              <motion.div
                key={`skill-fe-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "be" &&
            BACKEND_LIST.map((l, index) => (
              <motion.div
                key={`skill-be-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "cloud" &&
            CLOUD_LIST.map((l, index) => (
              <motion.div
                key={`skill-cloud-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "testing" &&
            TESTING_LIST.map((l, index) => (
              <motion.div
                key={`skill-testing-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "others" &&
            OTHERS_LIST.map((l, index) => (
              <motion.div
                key={`skill-others-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
        </div>
      </section>
    </SectionContainer>
  );
};
