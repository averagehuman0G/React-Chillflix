import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  // Picking a user should go here.
  <div className="landing">
    <h1> This is the landing page! </h1>
    <Link to="/search">View All</Link>
  </div>
);

export default Landing;
