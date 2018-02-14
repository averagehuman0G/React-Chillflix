import React from 'react';
import data from '../data.json';

const ViewAll = () => (
  <div className="viewing-all">
    {data.shows.map(show => (
      <div className="show-card">
        <img alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
        <div className="show-info">
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ViewAll;
