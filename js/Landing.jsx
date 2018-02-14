import { Link } from 'react-router-dom';
import React from 'react';
import Logo from './userLogo';

const Landing = () => (
  // Picking a user should go here.

  <div className="landing">
    <Logo />
    <h1> This is the landing page! </h1>
    <Link href to="/search">
      View All
    </Link>
  </div>
);

export default Landing;
