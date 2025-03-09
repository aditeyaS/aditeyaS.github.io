import { Badge } from "@/components/ui/badge";
import { SKILL_OTHERS } from "@/data/skill";
import { motion } from "framer-motion";

export function Others() {
  return SKILL_OTHERS.map((skill, index) => (
    <motion.div
      key={`skill-other-${index}`}
      initial={{ opacity: 0, x: -100, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <Badge
        className="[&_svg]:size-4 flex items-center gap-1 font-mono font-thin py-1"
        variant={"secondary"}
        style={{ borderColor: skill.color }}
      >
        <span style={{ color: skill.color }}>{skill.icon}</span>
        <span>{skill.name}</span>
      </Badge>
    </motion.div>
  ));
}
