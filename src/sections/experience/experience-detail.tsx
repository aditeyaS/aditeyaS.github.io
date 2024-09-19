import React, { useState } from "react";
import { TXT, TXT2 } from "../../components/ui";

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
  return (
    <>
      <ul className="list-disc lg:list-inside">
        {list.slice(0, show ? list.length : 1).map((item, index) => (
          <li key={index}>
            <TXT className="font-light">{item}</TXT>
          </li>
        ))}
      </ul>
      {list.length > 1 && (
        <div className="flex justify-end">
          <button className="underline cursor-pointer" onClick={toggleShow}>
            <TXT2 className="cursor-pointer">
              {show ? "Show less" : "Show more"}
            </TXT2>
          </button>
        </div>
      )}
    </>
  );
};
