import React from 'react';
import './Greetings.scss';

import logo from '@images/logo.svg';

const Greetings = () => {
  return (
    <div className="Greetings">
      <h1>A minimal boilerplate for React, Redux and SCSS</h1>
      <img src={logo} alt=""/>
    </div>
  );
};

export default Greetings;