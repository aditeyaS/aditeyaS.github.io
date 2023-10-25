import React from 'react';
import ReactDOM from 'react-dom/client';

import themeConfig from './config/theme.config.json';
import skillConfig from './config/skill.config.json';
import userData from './data/user.data.json';
import Main from './components/Main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main
      themeConfig={themeConfig}
      skillConfig={skillConfig}
      userData={userData}
    />
  </React.StrictMode>
);
