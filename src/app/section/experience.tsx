import { Briefcase, Calendar, Dot, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import EXPERIENCES from "@/data/experience";
import { month } from "@/lib/utils";

export default function Experience() {
  const { appSectionRefs } = useAppScroll();
  const todaysDate = new Date();

  return (
    <Section ref={appSectionRefs.experience}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <Briefcase />
          Experience
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-4">
          {EXPERIENCES.map((e, i) => {
            const fromMonth = e.from.getMonth();
            const fromYear = e.from.getFullYear();
            const fromString = `${month(fromMonth)}, ${fromYear}`;
            const toMonth = e.to.getMonth();
            const toYear = e.to.getFullYear();
            const toString =
              toMonth === todaysDate.getMonth() &&
              toYear === todaysDate.getFullYear()
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
              <div
                key={`experience-${i}`}
                className="flex flex-col items-start gap-2 p-4 border rounded"
              >
                <h2 className="text-primary">{e.position}</h2>
                <div className="flex items-center flex-wrap">
                  <a
                    className="hover:underline underline-offset-4"
                    target="_blank"
                    href={e.organizationLink}
                  >
                    {e.organization}
                  </a>
                  <Dot />
                  {e.positionType}
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
                    {e.location} <Dot />
                    {e.locationType}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
