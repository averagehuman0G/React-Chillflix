import React from 'react';
import ShowCard from './showCard';
import data from '../data.json';

const ViewAll = () => (
  <div className="viewing-all">{data.shows.map(show => <ShowCard {...show} key={show.imdbID} />)}</div>
);

export default ViewAll;
