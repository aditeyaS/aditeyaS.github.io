import PropTypes from 'prop-types';

const SkillCard = ({ skillList, skillConfig }) => {
  return (
    <>
      <div className="card shadow-lg compact bg-app bg-base-200">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-accent opacity-70">Skills</span>
            </h5>
          </div>
          <div className="p-3 flow-root">
            {skillList.map((skill, idx) => (
              <div key={idx} className={idx == 0 ? '' : 'mt-2'}>
                <div className="flex flex-wrap justify-center text-primary-content">
                  {skill.title}
                </div>
                <div className="-m-1 flex flex-wrap justify-center mt-1">
                  {skill.skillIdList.map((skillId, idx) => (
                    <div
                      key={idx}
                      className="tooltip tooltip-accent z-10"
                      data-tip={skillConfig[skillId].name}
                    >
                      <img
                        className="m-1"
                        height="25"
                        width="25"
                        src={`https://cdn.simpleicons.org/${skillConfig[skillId].slug}/${skillConfig[skillId].color}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

SkillCard.propTypes = {
  skillList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      skillIdList: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
  skillConfig: PropTypes.object.isRequired,
};

export default SkillCard;
