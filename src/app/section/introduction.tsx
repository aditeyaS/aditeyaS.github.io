import { BadgeCheck, CalendarCheck, File, MapPin } from "lucide-react";
import USER from "@/data/user";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";

export function Introduction() {
  const { appSectionRefs } = useAppScroll();

  return (
    <Section ref={appSectionRefs.introduction}>
      <div className="flex flex-col gap-4">
        <img
          src={`https://github.com/${USER.github.username}.png`}
          className="w-24 rounded-full ring-1 ring-primary ring-offset-4 ring-offset-background"
        />

        <div className="flex gap-2 items-center">
          <span className="text-2xl font-semibold">{USER.displayName}</span>
          <BadgeCheck className="size-4 text-primary" />
        </div>

        <span className="text-muted-foreground">{USER.bio}</span>

        <div className="flex gap-1 flex-wrap items-center text-muted-foreground">
          <MapPin className="size-4" />
          <span>{USER.location}</span>
        </div>

        <div className="space-x-2">
          <a target="_blank" href={USER.resumeUrl}>
            <Button size={"sm"}>
              <File /> Resume
            </Button>
          </a>
          <a target="_blank" href={USER.meeting}>
            <Button variant={"outline"} size={"sm"}>
              <CalendarCheck /> Book Time
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
