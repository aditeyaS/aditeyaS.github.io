import React from "react";

interface PageContainerProps {
  title: string;
  icon: React.ReactNode;
  pageBody: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  icon,
  pageBody,
}) => {
  return (
    <section className="py-10">
      <div className="flex justify-center flex flex-col items-center py-10 gap-4">
        <div className="motion-safe:animate-bounce">{icon}</div>
        <h1 className="text-primary text-4xl md:text-7xl font-title">
          {title}
          <span className="text-secondary">.</span>
        </h1>
      </div>
      {pageBody}
    </section>
  );
};

export default PageContainer;
