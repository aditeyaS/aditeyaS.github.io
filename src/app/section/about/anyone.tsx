import { motion } from "framer-motion";
import { HOBBIES, QUOTE_ANYONE } from "@/data/about";
import { Badge } from "@/components/ui/badge";
import { Blockquote } from "@/components/blockquote";

export function Anyone() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Blockquote quote={QUOTE_ANYONE.quote} author={QUOTE_ANYONE.author} />
      <div className="flex gap-2 items-center flex-wrap">
        <span className="text-sm text-muted-foreground">Hobbies:</span>
        {HOBBIES.map((h, i) => (
          <Badge
            key={`hobby-${i}`}
            variant={"secondary"}
            className="[&_svg]:size-4 flex items-center gap-1"
          >
            {h.icon}
            {h.name}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
