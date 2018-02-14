import React from 'react';
import styled from 'styled-components';
import ShowCard from './showCard';
import data from '../data.json';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 10%;
`;

const ViewAll = () => <Wrapper>{data.shows.map(show => <ShowCard {...show} key={show.imdbID} />)}</Wrapper>;

export default ViewAll;
