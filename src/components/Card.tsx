import React from "react";

interface CardProps {
  body: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ body }) => {
  return (
    <div className="card bg-base-100 border border-r-8 border-b-8 border-primary">
      <div className="card-body">{body}</div>
    </div>
  );
};
