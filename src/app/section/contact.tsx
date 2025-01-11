import { ContactIcon } from "lucide-react";
import USER from "@/data/user";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/layout/section";
import { useAppScroll } from "../providers/scroll";
import {
  SiGmail,
  SiGmailHex,
  SiOnlyfans,
} from "@icons-pack/react-simple-icons";
import CONTACT from "@/data/contact";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { appSectionRefs } = useAppScroll();

  const { toast } = useToast();

  function handleEmailClick() {
    navigator.clipboard.writeText(USER.email);
    toast({
      variant: "default",
      title: "Success",
      description: `The email ${USER.email} has been copied to clipboard.`,
    });
  }

  function handleOfClick() {
    toast({
      variant: "destructive",
      title: "Sorry",
      description: `I don't use it. But, why did you even click that?`,
    });
  }

  return (
    <Section ref={appSectionRefs.contact}>
      <div className="flex flex-col gap-6">
        <SectionHeader>
          <ContactIcon />
          Contact & Social
        </SectionHeader>
        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={handleEmailClick}
            variant={"ghost"}
            size={"icon"}
            title="Copy email"
            style={{
              color: SiGmailHex,
            }}
            aria-label="Copy email"
          >
            <SiGmail />
          </Button>
          {CONTACT.map((c, i) => (
            <a key={`contact-${i}`} target="_blank" href={c.url}>
              <Button
                variant={"ghost"}
                size={"icon"}
                title={c.title}
                aria-label={c.title}
                style={{
                  color: c.color,
                }}
              >
                {c.icon}
              </Button>
            </a>
          ))}
          <Button
            onClick={handleOfClick}
            variant={"ghost"}
            size={"icon"}
            title="OnlyFans"
            style={{
              color: "#00AFF0",
            }}
            aria-label="OnlyFans"
          >
            <SiOnlyfans />
          </Button>
        </div>
      </div>
    </Section>
  );
}
