import React from "react";
import ProgrammerVector from "../assets/ProgrammerVector";
import teamwork from "../assets/values/teamwork.png";
import learning from "../assets/values/learning.png";
import work_ethic from "../assets/values/work_ethic.png";
import flexibility from "../assets/values/flexibility.png";
import integrity from "../assets/values/intregity.png";

const About: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <ProgrammerVector />
      <h1 className="text-7xl text-primary text-center">Aditeya Srivastava</h1>
      <span className="text-2xl font-mono text-secondary text-center">
        A Software Engineer by hobby, passion, and profession with a pinch of
        creativity.
      </span>
      <button className="btn btn-accent btn-outline">R E S U M E</button>
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
    </section>
  );
};

export default About;
