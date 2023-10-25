import { AiOutlineControl, AiFillCaretDown } from 'react-icons/ai';
import PropTypes from 'prop-types';

const ThemeCard = ({ theme, setTheme, themeConfig }) => {
  const changeThemeT = (e, selectedTheme) => {
    e.preventDefault();
    document.querySelector('html').setAttribute('data-theme', selectedTheme);
    localStorage.setItem('app-theme', selectedTheme);
    setTheme(selectedTheme);
  };

  const getThemeName = (themeId) => {
    const currentTheme = themeConfig.themes.filter((t) => t.themeId == themeId);
    if (currentTheme.length != 0) return currentTheme[0].displayName;
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-200">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            <span className="text-accent opacity-70">Theme</span>
          </h5>
          <span className="text-primary-content text-sm">
            {getThemeName(theme)}
          </span>
        </div>
        <div className="flex-0">
          <div title="Change Theme" className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
            >
              <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2 text-primary-content" />
              <span className="hidden md:inline text-primary-content">
                Change Theme
              </span>
              <AiFillCaretDown className="inline-block w-4 h-4 ml-1 fill-current text-primary-content" />
            </div>
            <div
              tabIndex={0}
              className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 opacity-50 w-52 rounded-lg bg-base-300 text-primary-content z-10"
            >
              <ul className="p-4 menu compact">
                {themeConfig.themes.map((item, idx) => (
                  <li key={idx}>
                    <a
                      onClick={(e) => changeThemeT(e, item.themeId)}
                      className={`${
                        theme === item.themeId
                          ? 'card-bordered border-accent'
                          : ''
                      }`}
                    >
                      <span>{item.displayName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ThemeCard.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  themeConfig: PropTypes.object.isRequired,
};

export default ThemeCard;
