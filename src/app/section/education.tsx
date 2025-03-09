import { BookOpen, Calendar, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import { month } from "@/lib/utils";
import EDUCATION from "@/data/education";
import Education from "@/types/education";

export default function EducationSection() {
  const { appSectionRefs } = useAppScroll();

  return (
    <Section ref={appSectionRefs.education}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <BookOpen />
          Education
        </SectionHeader>
        <div className="grid lg:grid-cols-2 gap-4">
          {EDUCATION.map((e, i) => (
            <EducationCard key={`education-${i}`} education={e} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface Props {
  education: Education;
}

function EducationCard({ education }: Props) {
  const fromMonth = education.from.getMonth();
  const fromYear = education.from.getFullYear();
  const fromString = `${month(fromMonth)}, ${fromYear}`;

  const toMonth = education.to.getMonth();
  const toYear = education.to.getFullYear();
  const toString = `${month(toMonth)}, ${toYear}`;

  return (
    <div className="flex flex-col gap-1 p-4 border rounded">
      <h2 className="text-primary">{education.degree}</h2>
      <a
        className="hover:underline underline-offset-2 text-sm"
        target="_blank"
        href={education.instituteLink}
      >
        {education.institute}
      </a>
      <span className="flex gap-2 items-center text-sm text-muted-foreground">
        <Calendar className="size-3" />
        {`${fromString} - ${toString}`}
      </span>
      <span className="flex gap-2 items-center text-sm text-muted-foreground">
        <MapPin className="size-3" />
        {education.location}
      </span>
    </div>
  );
}
