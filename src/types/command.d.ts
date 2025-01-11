import { AppSectionRefs } from "@/app/providers/scroll";

export type CommandSection = {
  name: string;
  icon: React.ReactNode;
  section: typeof AppSectionRefs;
};

export type CommandLink = {
  name: string;
  icon: React.ReactNode;
  url: string;
};
