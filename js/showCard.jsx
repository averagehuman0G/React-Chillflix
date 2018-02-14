import React from 'react';
import styled from 'styled-components';

const ShowCardWrapper = styled.div`
  flex: 1;
  justify-content: space-around;
  flex-basis: 25%;
  height: 500px;
  border: 1px solid black;
  margin: 2% 2%;
`;
const Img = styled.img`
  width: 40%;
`;
const ShowCard = props => (
  <ShowCardWrapper>
    <Img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </ShowCardWrapper>
);

export default ShowCard;
