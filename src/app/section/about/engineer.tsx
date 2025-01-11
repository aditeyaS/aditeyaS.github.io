import { motion } from "framer-motion";
import { Blockquote } from "@/components/blockquote";
import { Button } from "@/components/ui/button";
import {
  DESCRIPTION_ENGINEER,
  LINKS_ENGINEER,
  QUOTE_ENGINEER,
} from "@/data/about";

export function Engineer() {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Blockquote quote={QUOTE_ENGINEER.quote} author={QUOTE_ENGINEER.author} />
      <p>{DESCRIPTION_ENGINEER}</p>
      <div className="flex gap-2">
        {LINKS_ENGINEER.map((c, i) => (
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
