import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from './Root';

import './index.scss';
// tesena
//change test
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
