//@flow
import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 1.4em;
  font-weight: bold;
  color: #e50914;
`;

const Logo = () => (
  <div>
    <StyledLogo>CHILLFLIX</StyledLogo>
  </div>
);

export default Logo;
