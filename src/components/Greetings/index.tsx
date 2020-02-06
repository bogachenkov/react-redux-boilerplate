import React, { useEffect } from 'react';
import './Greetings.scss';

import useRouter from '@hooks/useRouter';

//import * as logo from '@images/logo.svg';

const Greetings: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('Router Location:', router.location);
  })
  return (
    <div className="Greetings">
      <h1>A minimal boilerplate for React, Redux and SCSS</h1>
    </div>
  );
};

export default Greetings;