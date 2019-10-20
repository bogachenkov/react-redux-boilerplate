import { hot } from 'react-hot-loader/root';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css';

import Router from '@screens/Router';

const App = props => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

const HotReloadedApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <HotReloadedApp />
  </Provider>, document.getElementById('root'));