import ClemsonLogo from "../../assets/education/clemson.png";
import AktuLogo from "../../assets/education/aktu.png";

type EducationType = {
  degree: string;
  logo: string;
  institute: string;
  instituteLink: string;
  from: Date;
  to: Date;
  location: string;
};

export const EDUCATION_LIST: EducationType[] = [
  {
    degree: "MS, Computer Science",
    logo: ClemsonLogo,
    institute: "Clemson University",
    instituteLink: "https://www.clemson.edu/",
    from: new Date(2022, 7),
    to: new Date(2024, 4),
    location: "Clemson, SC 🇺🇸",
  },
  {
    degree: "BS, Computer Science",
    logo: AktuLogo,
    institute: "Dr. APJ Abdul Kalam Technical University",
    instituteLink: "https://aktu.ac.in/",
    from: new Date(2017, 7),
    to: new Date(2021, 4),
    location: "Lucknow, UP 🇮🇳",
  },
];
