import themeConfig from './config/theme.config.json';
import skillConfig from './config/skill.config.json';
import userData from './data/user.data.json';
import GitProfile from './components/GitProfile';

function App() {
  return (
    <GitProfile
      themeConfig={themeConfig}
      skillConfig={skillConfig}
      userData={userData}
    />
  );
}

export default App;
