import { Link2, PanelsTopLeft } from "lucide-react";
import { Section } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import PROJECTS from "@/data/project";
import { Badge } from "@/components/ui/badge";

export function Projects() {
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
            <div
              key={`project-${i}`}
              className="flex flex-col gap-2 p-4 border rounded"
            >
              <a
                target="_blank"
                href={project.link}
                className="flex items-center gap-2 underline-offset-4 text-primary hover:underline"
              >
                <Link2 className="size-4" /> {project.name}
              </a>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex gap-2">
                {project.skills.map((skill, i2) => (
                  <Badge
                    key={`project-${i}-skill-${i2}`}
                    variant={"secondary"}
                    className="[&_svg]:size-4 gap-2"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
