import React from "react";
import IconProps from "../common/IconProps";

const AdditionalIcon: React.FC<IconProps> = ({ size = "sm" }) => {
  return (
    <svg
      className={
        size === "sm" ? "h-6 w-6 fill-base-content" : "h-28 w-28 fill-primary"
      }
      viewBox="0 0 24 24"
    >
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <g>
            <path d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default AdditionalIcon;
