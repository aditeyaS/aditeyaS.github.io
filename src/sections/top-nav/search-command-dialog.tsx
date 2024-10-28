import { Icon as AboutIcon } from "../about/icon";
import { Icon as ExperienceIcon } from "../experience/icon";
import { Icon as SkillsIcon } from "../skills/icon";
import { Icon as ProjectsIcon } from "../projects/icon";
import { Icon as EducationIcon } from "../education/icon";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import { AppSectionRefs, useAppScroll } from "../app-scroll-context";
import React from "react";

interface SearchCommandDialogProps {
  show: boolean;
  onClose: () => void;
}

export const SearchCommandDialog: React.FC<SearchCommandDialogProps> = ({
  show,
  onClose,
}) => {
  const { scrollToSection } = useAppScroll();

  const onCommandSelect = (commandSection: keyof AppSectionRefs) => {
    scrollToSection(commandSection);
    onClose();
  };

  return (
    <CommandDialog open={show} onOpenChange={onClose}>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => onCommandSelect("intro")}>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
            <span>Intro</span>
          </CommandItem>
          <CommandItem onSelect={() => onCommandSelect("about")}>
            <AboutIcon />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => onCommandSelect("experience")}>
            <ExperienceIcon />
            <span>Experience</span>
          </CommandItem>
          <CommandItem onSelect={() => onCommandSelect("skills")}>
            <SkillsIcon />
            <span>Skills</span>
          </CommandItem>
          <CommandItem onSelect={() => onCommandSelect("projects")}>
            <ProjectsIcon />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => onCommandSelect("education")}>
            <EducationIcon />
            <span>Education</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
