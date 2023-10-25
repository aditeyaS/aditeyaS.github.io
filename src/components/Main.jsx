import { Fragment, useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import '../assets/index.css';

import ThemeCard from './ThemeCard';
import AvatarCard from './AvatarCard';
import SkillCard from './SkillCard';
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';

const Main = ({ themeConfig, skillConfig, userData }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const previousTheme = localStorage.getItem('app-theme') || '';
    if (previousTheme == '') {
      setTheme(themeConfig.default);
    } else {
      setTheme(previousTheme);
    }
  });

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        <Fragment>
          <div className={`p-4 lg:p-10 min-h-full bg-base-100`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-6">
                  <ThemeCard
                    theme={theme}
                    setTheme={setTheme}
                    themeConfig={themeConfig}
                  />
                  <AvatarCard
                    basicDetails={userData['basic']}
                    skillConfig={skillConfig}
                  />
                  <SkillCard
                    skillList={userData['skill']}
                    skillConfig={skillConfig}
                  />
                  <EducationCard educationList={userData['education']} />
                </div>
              </div>
              <div className="lg:col-span-2 col-span-1">
                <div className="grid grid-cols-1 gap-6">
                  <ExperienceCard experienceList={userData['experience']} />
                  <ProjectCard
                    projectList={userData['projects']}
                    skillConfig={skillConfig}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </HelmetProvider>
  );
};

Main.propTypes = {
  themeConfig: PropTypes.object.isRequired,
  skillConfig: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired,
};

export default Main;
