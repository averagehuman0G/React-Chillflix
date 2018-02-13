import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import ViewAll from './ViewAll';
import FourOhFour from './FourOhFour';
import Logo from './userLogo';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={ViewAll} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
