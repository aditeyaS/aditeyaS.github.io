import React, { useState } from "react";
import { TXT2 } from "../../components/ui";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceDetailsProps {
  list: string[];
}

export const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({
  list,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const toggleShow = () => {
    setShow(!show);
  };

  const LIST_CONTAINER_VARIANTS = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverses the stagger order for exit
      },
    },
  };

  const LIST_ITEM_VARIANTS = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.ul
            className="list-disc lg:list-inside"
            variants={LIST_CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit" // Add the exit animation
          >
            {list.map((item, index) => (
              <motion.li key={index} variants={LIST_ITEM_VARIANTS}>
                <TXT2 className="text-sm font-light">{item}</TXT2>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {list.length > 0 && (
        <div className="flex justify-end">
          <button className="underline cursor-pointer" onClick={toggleShow}>
            <TXT2 className="cursor-pointer text-sm">
              {show ? "Hide details" : "Show details"}
            </TXT2>
          </button>
        </div>
      )}
    </>
  );
};
