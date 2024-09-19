import React, { useState } from "react";

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
      <ul className="list-disc list-inside">
        {list.slice(0, show ? list.length : 1).map((item, index) => (
          <li key={index} className="font-thin text-sm">
            {item}
          </li>
        ))}
      </ul>
      {list.length > 1 && (
        <div className="flex justify-end">
          <button className="font-thin text-xs underline" onClick={toggleShow}>
            {show ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </>
  );
};
