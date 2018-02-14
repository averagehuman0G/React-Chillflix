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

class ViewAll extends React.Component {
  state = {
    searchTerm: '',
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div>
        <header>
          <Logo />
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="search"
          />
        </header>
        <Wrapper>{data.shows.map(show => <ShowCard {...show} key={show.imdbID} />)}</Wrapper>
      </div>
    );
  }
}

export default ViewAll;
