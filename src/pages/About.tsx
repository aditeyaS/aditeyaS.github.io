import React, { useEffect, useState } from "react";
import ProgrammerVector from "../assets/ProgrammerVector";
import teamwork from "../assets/values/teamwork.png";
import learning from "../assets/values/learning.png";
import work_ethic from "../assets/values/work_ethic.png";
import flexibility from "../assets/values/flexibility.png";
import integrity from "../assets/values/intregity.png";

const About: React.FC = () => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const nameEnglish = ["A", "di", "te", "ya", " ", "Sri", "va", "st", "ava"];
    const nameHindi = ["आ", "दी", "ते", "य", " ", "श्री", "वा", "स्त", "वा"];
    const nameList = [nameEnglish, nameHindi];
    let i = 0;
    let j = 0;
    let currentName: string[] = [];
    let isDeleting = false;
    const type = () => {
      currentName = nameList[i];
      if (isDeleting) {
        setName(currentName.slice(0, j - 1).join(""));
        j--;
        if (j == 1) {
          isDeleting = false;
          i++;
          i = i == nameList.length ? 0 : i;
        }
      } else {
        setName(currentName.slice(0, j + 1).join(""));
        j++;
        if (j == currentName.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 200);
    };
    type();
  }, []);

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <ProgrammerVector />
      <h1 className="text-3xl md:text-4xl lg:text-7xl text-primary text-center font-title">
        {name}
      </h1>
      <span className="text-xl md:text-2xl text-secondary text-center">
        A Software Engineer by hobby, passion, and profession.
      </span>
      <button
        className="btn btn-accent btn-lg"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1tzveHUC7HB9iWXSCh8TWLoGNEDXa_thc",
            "_blank"
          );
        }}
      >
        View Resume
      </button>
      <span className="text-2xl text-secondary">My values</span>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src={teamwork} alt="Teamwork and Collaboration" />
        </div>
        <div className="carousel-item">
          <img src={learning} alt="Continuous Learning and Improvement" />
        </div>
        <div className="carousel-item">
          <img src={work_ethic} alt="Work Ethic" />
        </div>
        <div className="carousel-item">
          <img src={flexibility} alt="Adaptability and Flexibility" />
        </div>
        <div className="carousel-item">
          <img src={integrity} alt="Integrity" />
        </div>
      </div>
      <div className="flex gap-2">
        <a
          className="btn btn-circle btn-md"
          href="mailto:this.is.aditeya@gmail.com"
          target="_blank"
        >
          <img
            className="m-1 w-6 h-6"
            src={`https://cdn.simpleicons.org/gmail`}
          />
        </a>
        <a
          className="btn btn-circle btn-md"
          href="https://www.github.com/aditeyaS"
          target="_blank"
        >
          <img
            className="m-1 w-6 h-6"
            src={`https://cdn.simpleicons.org/github/000000/ffffff`}
          />
        </a>
        <a
          className="btn btn-circle btn-md"
          href="https://www.linkedin.com/in/aditeya"
          target="_blank"
        >
          <img
            className="m-1 w-6 h-6"
            src={`https://cdn.simpleicons.org/linkedin`}
          />
        </a>
        <a
          className="btn btn-circle btn-md"
          href="https://www.x.com/aditeyaaaa"
          target="_blank"
        >
          <img
            className="m-1 w-6 h-6"
            src={`https://cdn.simpleicons.org/x/000000/ffffff`}
          />
        </a>
      </div>
    </section>
  );
};

export default About;
