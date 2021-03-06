import React, { useEffect } from 'react';
import './Greetings.scss';

import useRouter from '@hooks/useRouter';

import logo from '@images/logo.svg';

const Greetings = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('Router Location:', router.location);
  })
  return (
    <div className="Greetings">
      <h1>A minimal boilerplate for React, Redux and SCSS</h1>
      <img src={logo} alt=""/>
    </div>
  );
};

export default Greetings;