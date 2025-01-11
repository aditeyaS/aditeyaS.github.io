import React from "react";
import { motion } from "framer-motion";
import {
  DESCRIPTION_RECRUITER,
  KEY_POINTS_RECRUITER,
  LINKS_RECRUITER,
} from "@/data/about";
import { useToast } from "@/hooks/use-toast";
import USER from "@/data/user";
import { Button } from "@/components/ui/button";
import { SiGmail, SiGmailHex } from "@icons-pack/react-simple-icons";

export const Recruiter: React.FC = () => {
  const { toast } = useToast();

  function handleEmailClick() {
    navigator.clipboard.writeText(USER.email);
    toast({
      variant: "default",
      title: "Success",
      description: `The email ${USER.email} has been copied to clipboard.`,
    });
  }

  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <p>{DESCRIPTION_RECRUITER}</p>
      <ul className="list-disc list-inside">
        {KEY_POINTS_RECRUITER.map((text, index) => (
          <li key={`recruiter-key-point-${index}`}>{text}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <Button
          onClick={handleEmailClick}
          variant={"ghost"}
          size={"icon"}
          title="Copy email"
          aria-label="Copy email"
          style={{
            color: SiGmailHex,
          }}
        >
          <SiGmail />
        </Button>
        {LINKS_RECRUITER.map((c, i) => (
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
      </div>
    </motion.div>
  );
};
