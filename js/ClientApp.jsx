
import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  const app = document.getElementById('app');
  if(app === null) throw new Error('App is null');
  else {
    render(<App />, document.getElementById('app'));
  }
};

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
