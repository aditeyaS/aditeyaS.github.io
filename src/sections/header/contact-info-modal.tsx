import React from "react";
import { Modal, ModalBody, ModalTrigger } from "../../components/layout/modal";
import { Email, GitHub, LinkedIn, Twitter } from "../../icons";

export const ContactInfoModal: React.FC = () => {
  return (
    <Modal>
      <ModalTrigger className="hover:underline text-primary">
        Contact Info
      </ModalTrigger>
      <ModalBody title="Contact Info">
        <div className="flex flex-col gap-2 font-thin flex-wrap items-center">
          <a
            href="mailto:aditeyaaaa@gmail.com"
            target="_blank"
            className="flex gap-1 items-center hover:underline cursor-pointer"
          >
            <Email />
            aditeyaaaa@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aditeya"
            target="_blank"
            className="flex gap-1 items-center hover:underline cursor-pointer"
          >
            <LinkedIn />
            aditeya
          </a>
          <a
            href="https://www.github.com/aditeyaS"
            target="_blank"
            className="flex gap-1 items-center hover:underline cursor-pointer"
          >
            <GitHub />
            aditeyaS
          </a>
          <a
            href="https://www.x.com/aditeyaaaa"
            target="_blank"
            className="flex gap-1 items-center hover:underline cursor-pointer"
          >
            <Twitter />
            aditeyaaaa
          </a>
        </div>
      </ModalBody>
    </Modal>
  );
};
