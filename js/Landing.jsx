//@flow
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Logo from './userLogo';

const LandingWrapper = styled.div`
  margin: 0 5%;
`;

const Landing = () => (
  // Picking a user should go here.

  <LandingWrapper>
    <Logo />
    <h1> This is the landing page! </h1>
    <Link href to="/search">
      View All
    </Link>
  </LandingWrapper>
);

export default Landing;
