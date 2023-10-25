import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';

const ExperienceCard = ({ experienceList }) => {
  const renderProjects = () => {
    return experienceList.map((experience, index) => (
      <div
        className="card shadow-lg compact bg-base-300 cursor-pointer"
        key={index}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center">
              <div className="card-title text-lg tracking-wide flex text-primary-focus opacity-60">
                <span>{experience.position}</span>
              </div>
            </div>
            <p className="mb-5 mt-1 text-primary-content text-opacity-60 text-sm">
              {experience.organization}
            </p>
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                <AiFillCalendar className="mr-0.5 text-primary-content" />
                <span className="text-primary-content">
                  {experience.duration}
                </span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <FaLocationDot className="mr-0.5 text-primary-content" />
                <span className="text-primary-content">
                  {experience.location}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-200 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-accent opacity-70">Experience</span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ExperienceCard.propTypes = {
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceCard;
