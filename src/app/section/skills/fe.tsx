import { Badge } from "@/components/ui/badge";
import { SKILL_FRONT_END } from "@/data/skill";
import { motion } from "framer-motion";

export function FE() {
  return SKILL_FRONT_END.map((skill, index) => (
    <motion.div
      key={`skill-fe-${index}`}
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
