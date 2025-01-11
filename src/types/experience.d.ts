type Experience = {
  position: string;
  organization: string;
  organizationLink: string;
  positionType: "Part-time" | "Full-time" | "Internship";
  from: Date;
  to: Date;
  location: string;
  locationType: "Remote" | "Hybrid" | "On-site";
};

export default Experience;
