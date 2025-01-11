import { BookOpen, Calendar, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import { month } from "@/lib/utils";
import EDUCATION from "@/data/education";

export function Education() {
  const { appSectionRefs } = useAppScroll();

  return (
    <Section ref={appSectionRefs.education}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <BookOpen />
          Education
        </SectionHeader>
        <div className="grid lg:grid-cols-2 gap-4">
          {EDUCATION.map((e, i) => {
            const fromMonth = e.from.getMonth();
            const fromYear = e.from.getFullYear();
            const fromString = `${month(fromMonth)}, ${fromYear}`;
            const toMonth = e.to.getMonth();
            const toYear = e.to.getFullYear();
            const toString = `${month(toMonth)}, ${toYear}`;
            return (
              <div
                key={`education-${i}`}
                className="flex flex-col gap-2 p-4 border rounded"
              >
                <h2 className="text-primary">{e.degree}</h2>
                <a
                  className="hover:underline underline-offset-4"
                  target="_blank"
                  href={e.instituteLink}
                >
                  {e.institute}
                </a>
                <span className="flex gap-2 items-center text-sm text-muted-foreground">
                  <Calendar className="size-3" />
                  {`${fromString} - ${toString}`}
                </span>
                <span className="flex gap-2 items-center text-sm text-muted-foreground">
                  <MapPin className="size-3" />
                  {e.location}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
