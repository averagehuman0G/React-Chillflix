import React from 'react';
import { render } from 'react-dom';

const MyFirstComponent = function title() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Just setting up my tooling before I get to Chillflix!')
  );
};

render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
