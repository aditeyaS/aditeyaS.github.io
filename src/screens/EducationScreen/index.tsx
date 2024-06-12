import clemson from "../../assets/education/clemson.png";
import aktu from "../../assets/education/aktu.png";
import bhs from "../../assets/education/bhs.png";
import EducationIcon from "../../icons/EducationIcon";
import React from "react";
import { AppScreenContainer, Card, PageContainer } from "../../components";

interface EducationModel {
  logo: string;
  institute: string;
  location: string;
  degree: string;
  major: string;
  duration: string;
}

const educationList: EducationModel[] = [
  {
    logo: clemson,
    institute: "Clemson University",
    location: "Clemson, SC, US",
    degree: "Master of Science (MS)",
    major: "Computer Science",
    duration: "08.2022 - 05.2024",
  },
  {
    logo: aktu,
    institute: "Dr APJ Abdul Kalam Technical University",
    location: "Lucknow, UP, IN",
    degree: "Bachelor of Technology (BS)",
    major: "Computer Science & Engineering",
    duration: "08.2017 - 05.2021",
  },
  {
    logo: bhs,
    institute: "Boys' High School & College",
    location: "Prayagraj, UP, IN",
    degree: "High school & Senior High",
    major: "Computer Science, Mathematics",
    duration: "2016",
  },
];

export const EducationScreen: React.FC = () => {
  return (
    <AppScreenContainer
      body={
        <PageContainer
          title="Education"
          icon={<EducationIcon size="lg" />}
          pageBody={
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {educationList.map((education, index) => (
                <Card
                  key={index}
                  body={
                    <div className="flex flex-col gap-5 items-center md:flex-row">
                      <div className="rounded-full ring ring-accent ring-offset-base-200 ring-offset-4">
                        <img
                          className="w-32 h-32 min-w-32 min-h-32"
                          src={education.logo}
                        />
                      </div>
                      <div className="flex flex-col text-center md:text-left">
                        <h3 className="font-serif text-xl">
                          {education.institute}
                        </h3>
                        <span className="text-lg  text-neutral">
                          {education.location}
                        </span>
                        <span className="font-serif text-xl ">
                          {education.degree}, {education.major}
                        </span>
                        <span className="text-lg  text-neutral">
                          {education.duration}
                        </span>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          }
        />
      }
    />
  );
};
