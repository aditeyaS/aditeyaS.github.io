import { Link2, PanelsTopLeft } from "lucide-react";
import { Section } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import PROJECTS from "@/data/project";
import { Badge } from "@/components/ui/badge";
import Project from "@/types/project";

export default function ProjectsSection() {
  const { appSectionRefs } = useAppScroll();

  return (
    <Section ref={appSectionRefs.projects}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <PanelsTopLeft className="size-4" />
          <span>Projects</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface Props {
  project: Project;
}
function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col gap-1 p-4 border rounded">
      <a
        target="_blank"
        href={project.link}
        className="flex items-center gap-2 underline-offset-4 text-primary hover:underline"
      >
        <Link2 className="size-4" /> {project.name}
      </a>
      <p className="text-muted-foreground text-sm">{project.description}</p>
      <div className="flex gap-2 flex-wrap items-center">
        {project.skills.map((skill, i) => (
          <Badge
            key={`project-skill-${i}`}
            variant={"secondary"}
            className="[&_svg]:size-4 gap-2"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
