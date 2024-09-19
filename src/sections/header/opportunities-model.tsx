import React from "react";
import { Modal, ModalBody, ModalTrigger } from "../../components/layout/modal";

export const OpportunitiesModel: React.FC = () => {
  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-2 bg-background px-2 py-1 rounded-2xl font-thin hover:underline">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Open for new opportunities
      </ModalTrigger>
      <ModalBody title="Job preferences">
        <div className="flex flex-col gap-2 font-thin text-sm">
          <div className="flex justify-center font-bold border border-green-500 text-green-500 py-0.5">
            Open for full-time job opportunities
          </div>
          <div className="flex justify-center">
            <a className="cursor-pointer text-primary border border-primary px-2 py-1 rounded hover:underline">
              View Resume
            </a>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            Job titles:
            {[
              "Software Engineer",
              "Software Developer",
              "Full Stack Developer",
              "Web Developer",
            ].map((job, index) => (
              <div key={`job-title-${index}`} className="border p-0.5">
                {job}
              </div>
            ))}
          </div>
          <div className="flex items-center flex-wrap">
            Location: Anywhere in US
          </div>
          <div className="flex items-center flex-wrap">
            Relocation: Willing to relocate
          </div>
          <p className="cursor-default flex justify-center items-center flex-wrap text-foreground/70">
            Liked my profile? Please message me on &nbsp;
            <a
              href="https://www.linkedin.com/in/aditeya"
              target="_blank"
              className="underline cursor-pointer"
            >
              LinkedIn
            </a>
            &nbsp;or drop me an&nbsp;
            <a
              href="mailto:aditeyaaaa@gmail.com"
              target="_blank"
              className="underline cursor-pointer"
            >
              email
            </a>
            .
          </p>
        </div>
      </ModalBody>
    </Modal>
  );
};
