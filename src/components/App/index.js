import React from 'react';
import './app.scss';

import logo from 'images/logo.svg';

const App = () => {
  return (
    <div className="App">
      <h1>A minimal boilerplate for React, Redux and SCSS</h1>
      <h2>Webpack 4 configuration: Babel, Hot Reloading, Dev Server, Optimized Production build with JS minification, CSS minification and PostCSS features, Images optimization and more.</h2>
      <img src={logo} alt=""/>
    </div>
  );
};

export default App;