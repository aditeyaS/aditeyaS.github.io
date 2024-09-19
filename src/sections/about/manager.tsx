import React from "react";

type Value = {
  name: string;
  color: string;
};

const valueList: Value[] = [
  {
    name: "Teamwork and Collaboration",
    color: "#f00",
  },
  {
    name: "Continuous Learning and Improvement",
    color: "#0f0",
  },
  {
    name: "Work Ethic",
    color: "#00f",
  },
  {
    name: "Adaptability and Flexibility",
    color: "#ff0",
  },
  {
    name: "Integrity",
    color: "#0ff",
  },
];

export const Manager: React.FC = () => {
  return (
    <div className="font-thin flex flex-col gap-2">
      <span>
        Driven by a blend of technical expertise and leadership, I’ve led teams
        to build efficient, user-centered solutions while improving processes
        and performance across web and mobile platforms.
      </span>
      <div className="text-sm flex gap-1 items-center flex-wrap">
        <span>Values:</span>
        {valueList.map((value, index) => (
          <div
            key={`values-${index}`}
            className="border px-1 rounded-lg text-foreground/70"
            style={{ borderColor: value.color }}
          >
            {value.name}
          </div>
        ))}
      </div>
    </div>
  );
};
