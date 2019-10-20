import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Router;