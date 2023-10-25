import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ duration, degree, major, institute }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-accent rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="my-0.5 font-normal text-primary-content">{duration}</div>
    <h3 className="font-semibold text-primary-focus">{degree}</h3>
    <div className="font-normal text-primary-content">{major}</div>
    <div className="mb-4 font-normal text-primary-content">{institute}</div>
  </li>
);
ListItem.propTypes = {
  duration: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
};

const EducationCard = ({ educationList }) => {
  return (
    <>
      <div className="card shadow-lg compact bg-base-200">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-accent opacity-70">Education</span>
            </h5>
          </div>
          <div className="text-base-content text-opacity-60">
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              <Fragment>
                {educationList.map((education, index) => (
                  <ListItem
                    key={index}
                    duration={education.duration}
                    degree={education.degree}
                    major={education.major}
                    institute={education.institute}
                  />
                ))}
              </Fragment>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

EducationCard.propTypes = {
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      duration: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      institute: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default EducationCard;
