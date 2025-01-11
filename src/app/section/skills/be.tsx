import { Badge } from "@/components/ui/badge";
import { SKILL_BACK_END } from "@/data/skill";
import { motion } from "framer-motion";

export function BE() {
  return SKILL_BACK_END.map((skill, index) => (
    <motion.div
      key={`skill-be-${index}`}
      initial={{ opacity: 0, x: 100, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Badge
        className="[&_svg]:size-4 flex items-center gap-1 text-sm font-mono font-thin"
        variant={"secondary"}
      >
        <span style={{ color: skill.color }}>{skill.icon}</span>
        <span>{skill.name}</span>
      </Badge>
    </motion.div>
  ));
}
