import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { MdPublic, MdOutlineLock } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { BsPlayFill, BsInfoCircle } from 'react-icons/bs';

const ProjectCard = ({ projectList, skillConfig }) => {
  const getRepoAccess = (project) => {
    if ('codeLink' in project && 'liveLink' in project) {
      return <></>;
    } else {
      if (project.isPersonal) {
        return (
          <div className="flex">
            <BsInfoCircle className="my-auto mr-1 text-primary-content" />
            <span className="text-primary-content">Can show if required</span>
          </div>
        );
      } else {
        return (
          <div className="flex">
            <BsInfoCircle className="my-auto mr-1 text-primary-content" />
            <span className="text-primary-content">External project</span>
          </div>
        );
      }
    }
  };

  const renderProjects = () => {
    return projectList.map((project, idx) => (
      <div
        className="card shadow-lg compact bg-base-300
         cursor-pointer"
        key={idx}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                {project.isPublic ? (
                  <MdPublic className="my-auto" style={{ color: 'blue' }} />
                ) : (
                  <MdOutlineLock className="my-auto" style={{ color: 'red' }} />
                )}
                <span className="text-primary-focus">{project.title}</span>
              </div>
            </div>
            <p className="mb-1 mt-1 text-primary-content text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap">
              {project.skillsIds.map((skillId, idx) => (
                <span
                  key={idx}
                  className="m-1 pt-1 pb-1 pr-2 pl-2 text-xs rounded-md"
                  style={{ backgroundColor: skillConfig[skillId].color }}
                >
                  {skillConfig[skillId].name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex mt-2 gap-2 justify-between text-sm text-base-content text-opacity-60 truncate">
            {project.codeLink == undefined ? (
              <></>
            ) : (
              <a
                href={project.codeLink}
                className="grow flex justify-center border-2 p-1 border-primary-content"
                target="_blank"
                rel="noreferrer"
              >
                <BiCodeAlt className="my-auto text-primary-content" />
              </a>
            )}
            {project.liveLink == undefined ? (
              <></>
            ) : (
              <a
                href={project.liveLink}
                className="grow flex justify-center border-2 p-1 border-primary-content"
                target="_blank"
                rel="noreferrer"
              >
                <BsPlayFill className="my-auto text-primary-content" />
              </a>
            )}
            {getRepoAccess(project)}
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
                    <span className="text-accent opacity-70">Projects</span>
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

ProjectCard.propTypes = {
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isPublic: PropTypes.bool.isRequired,
      isPersonal: PropTypes.bool,
      codeLink: PropTypes.string,
      liveLink: PropTypes.string,
      skillsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  skillConfig: PropTypes.object.isRequired,
};

export default ProjectCard;
