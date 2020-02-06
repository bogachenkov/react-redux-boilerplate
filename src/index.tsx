import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css';

import Router from '@screens/Router';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));