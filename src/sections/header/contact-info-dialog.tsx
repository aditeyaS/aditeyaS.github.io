import React from "react";
import { Email, GitHub, LinkedIn, Twitter } from "../../icons";
import { TXT } from "../../components/ui";
import {
  USER_EMAIL,
  USER_GITHUB_URL,
  USER_LINKEDIN_URL,
  USER_TWITTER_URL,
} from "../../user-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

type Social = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const socialList: Social[] = [
  {
    name: USER_EMAIL,
    url: `mailto:${USER_EMAIL}`,
    icon: <Email />,
  },
  {
    name: "aditeya",
    url: USER_LINKEDIN_URL,
    icon: <LinkedIn />,
  },
  {
    name: "aditeyaS",
    url: USER_GITHUB_URL,
    icon: <GitHub />,
  },
  {
    name: "aditeyaaaa",
    url: USER_TWITTER_URL,
    icon: <Twitter />,
  },
];

export const ContactInfoDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:underline text-primary">Contact Info</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>Ways to contact me.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 flex-wrap items-center">
          {socialList.map((social) => (
            <a
              key={`social-${social.url}`}
              href={social.url}
              target="_blank"
              className="flex gap-1 items-center hover:underline cursor-pointer"
            >
              {social.icon}
              <TXT>{social.name}</TXT>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
