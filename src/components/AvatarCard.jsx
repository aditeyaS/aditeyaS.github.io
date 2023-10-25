import PropTypes from 'prop-types';
import { skeleton } from '../helpers/utils';
import LazyImage from './lazy-image';

const AvatarCard = ({ basicDetails, skillConfig }) => {
  return (
    <div className="card shadow-lg compact bg-base-200">
      <div className="grid place-items-center py-8">
        <div className="avatar opacity-90">
          <div className="mb-8 rounded-full w-32 h-32 ring ring-accent ring-offset-base-100 ring-offset-2">
            {
              <LazyImage
                src={basicDetails.imageLink}
                alt={basicDetails.name}
                placeholder={skeleton({
                  width: 'w-full',
                  height: 'h-full',
                  shape: '',
                })}
              />
            }
          </div>
        </div>
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-accent">{basicDetails.name}</span>
          </h5>
          <div className="mt-3 text-primary-content text-opacity-60 font-mono">
            {basicDetails.bio}
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          {basicDetails.socials.map((social, idx) => (
            <a key={idx} href={social.link} target="_blank" rel="noreferrer">
              <img
                className="m-1"
                height="25"
                width="25"
                src={`https://cdn.simpleicons.org/${
                  skillConfig[social.skillId].slug
                }/${skillConfig[social.skillId].color}`}
              />
            </a>
          ))}
        </div>
        <a
          href={basicDetails.resumeLink}
          target="_blank"
          className="btn btn-outline btn-sm text-xs mt-6 text-accent"
          download
          rel="noreferrer"
        >
          View Resumee
        </a>
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  basicDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    resumeLink: PropTypes.string.isRequired,
    linkedInLink: PropTypes.string.isRequired,
    gitHubLink: PropTypes.string.isRequired,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        skillId: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  skillConfig: PropTypes.object,
};

export default AvatarCard;
