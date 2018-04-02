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
  handleSearchTermChange = (event: SyntheticKeyboardEvent) => {
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
        <Wrapper>
          {data.shows
            .filter(show =>
              `${show.title} ${show.description}`.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            )
            .map(show => <ShowCard {...show} key={show.imdbID} />)}
        </Wrapper>
      </div>
    );
  }
}

export default ViewAll;
