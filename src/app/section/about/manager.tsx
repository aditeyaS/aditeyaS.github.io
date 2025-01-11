import { Blockquote } from "@/components/blockquote";
import { Button } from "@/components/ui/button";
import {
  DESCRIPTION_MANAGER,
  KEY_POINTS_MANAGER,
  LINKS_MANAGER,
  QUOTE_MANAGER,
} from "@/data/about";
import USER from "@/data/user";
import { useToast } from "@/hooks/use-toast";
import { SiGmail } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

export function Manager() {
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
      <Blockquote quote={QUOTE_MANAGER.quote} author={QUOTE_MANAGER.author} />

      <p>{DESCRIPTION_MANAGER}</p>
      <div>
        <span>My values</span>
        <ul className="list-disc list-inside">
          {KEY_POINTS_MANAGER.map((text, index) => (
            <li key={`manager-key-point-${index}`}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={handleEmailClick}
          variant={"ghost"}
          size={"icon"}
          title="Copy email"
          aria-label="Copy email"
        >
          <SiGmail />
        </Button>
        {LINKS_MANAGER.map((c, i) => (
          <a key={`contact-${i}`} target="_blank" href={c.url}>
            <Button
              variant={"ghost"}
              size={"icon"}
              title={c.title}
              aria-label={c.title}
            >
              {c.icon}
            </Button>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
