import React, { useState } from "react";
import { SectionContainer } from "../../components/layout/section-container";
import { H1, H2, TXT2 } from "../../components/ui";
import { Icon } from "./icon";
import { MagneticHover } from "../../components/layout/magnetic-hover";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { GitHub, Web } from "../../icons";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";
import { PROJECT_LIST } from "./data";

export const Projects: React.FC<SectionProps> = ({ sectionIndex }) => {
  const { appSectionRefs } = useAppScroll();

  return (
    <SectionContainer sectionIndex={sectionIndex} ref={appSectionRefs.projects}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-foreground-2">
          <Icon />
          <H1>Projects</H1>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
          {PROJECT_LIST.map((project, index) => (
            <div
              key={`project-${index}`}
              className="flex gap-2 p-0.5 lg:p-2 rounded-xl hover:bg-background-3"
            >
              <img className="w-12 h-12" srcSet={project.logo} />
              <div className="flex flex-col gap-1">
                <H2>{project.name}</H2>
                <div className="flex gap-1 items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="cursor-pointer p-1 rounded-full hover:bg-background"
                  >
                    <MagneticHover>
                      <GitHub />
                    </MagneticHover>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="cursor-pointer p-1 rounded-full hover:bg-background"
                    >
                      <MagneticHover>
                        <Web />
                      </MagneticHover>
                    </a>
                  )}
                </div>
                <TXT2 className="text-sm font-light">
                  {project.description}
                </TXT2>
                <div className="flex gap-2 flex-wrap items-center">
                  {project.skills.map((skill, skillIndex) => (
                    <ProjectSkill
                      key={`project-${index}-skill-${skillIndex}`}
                      icon={skill.icon}
                      name={skill.name}
                      color={skill.color}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

interface ProjectSkillProps {
  icon: React.ReactNode;
  name: string;
  color?: string;
}

const ProjectSkill = ({ icon, name, color }: ProjectSkillProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ color }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {icon}
      {isHovered && (
        <motion.div
          className={cn(
            "absolute bottom-full mb-2",
            "left-1/2 transform -translate-x-1/2",
            "bg-background text-xs font-code rounded-md py-1 px-2 shadow-lg z-10"
          )}
          animate={{
            rotate: [0, 10, -10, 0],
          }}
        >
          {name}
        </motion.div>
      )}
    </motion.div>
  );
};
