import { Briefcase, Calendar, Dot, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import EXPERIENCES from "@/data/experience";
import { month } from "@/lib/utils";
import Experience from "@/types/experience";

export default function ExperienceSection() {
  const { appSectionRefs } = useAppScroll();

  return (
    <Section ref={appSectionRefs.experience}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <Briefcase />
          Experience
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-4">
          {EXPERIENCES.map((e, i) => (
            <ExperienceCard experience={e} key={`experience-${i}`} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const todaysDate = new Date();

  const fromMonth = experience.from.getMonth();
  const fromYear = experience.from.getFullYear();
  const fromString = `${month(fromMonth)}, ${fromYear}`;

  const toMonth = experience.to.getMonth();
  const toYear = experience.to.getFullYear();
  const toString =
    toMonth === todaysDate.getMonth() && toYear === todaysDate.getFullYear()
      ? "Present"
      : `${month(toMonth)}, ${toYear}`;

  let diffMonths = (toYear - fromYear) * 12 + (toMonth - fromMonth);
  let diffString = "";
  if (diffMonths >= 12) {
    diffString = diffString + Math.floor(diffMonths / 12) + "y";
    diffMonths = diffMonths % 12;
  }
  if (diffMonths != 0) {
    diffString = diffString + " " + diffMonths + "m";
  }

  return (
    <div className="flex flex-col items-start gap-1 p-4 border rounded">
      <h2 className="text-primary">{experience.position}</h2>
      <div className="flex items-center flex-wrap text-sm">
        <a
          className="hover:underline underline-offset-2"
          target="_blank"
          href={experience.organizationLink}
        >
          {experience.organization}
        </a>
        <Dot />
        {experience.positionType}
      </div>
      <span className="flex gap-2 items-center text-sm text-muted-foreground">
        <Calendar className="size-3" />
        <span className="flex items-center">
          {`${fromString} - ${toString}`} <Dot /> {diffString}
        </span>
      </span>
      <span className="flex gap-2 items-center text-sm text-muted-foreground">
        <MapPin className="size-3" />
        <span className="flex items-center">
          {experience.location} <Dot />
          {experience.locationType}
        </span>
      </span>
    </div>
  );
}
