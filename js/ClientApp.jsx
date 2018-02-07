import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import ViewAll from './ViewAll';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={ViewAll} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
