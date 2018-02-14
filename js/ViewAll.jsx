import React from 'react';
import styled from 'styled-components';
import ShowCard from './showCard';
import Logo from './userLogo';
import data from '../data.json';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 5%;
`;

const ViewAll = () => (
  <div>
    <header>
      <Logo />
      <input type="text" placeholder="search" />
    </header>
    <Wrapper>{data.shows.map(show => <ShowCard {...show} key={show.imdbID} />)}</Wrapper>
  </div>
);

export default ViewAll;
