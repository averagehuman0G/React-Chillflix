import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewAll from '../ViewAll';
import ShowCard from '../showCard';
import data from '../../data.json';

configure({ adapter: new Adapter() });

describe('Search', () => {
  it('Should render correctly', () => {
    const component = shallow(<ViewAll />);
    expect(component).toMatchSnapshot();
  });

  it('Should render the correct number of shows', () => {
    const component = shallow(<ViewAll />);
    expect(component.find(ShowCard).length).toEqual(data.shows.length);
  });

  it('Should render the right number of shows based on the search term', () => {
    const searchTerm = 'Game';
    const component = shallow(<ViewAll />);
    component.find('input').simulate('change', { target: { value: searchTerm } });
    const showsRendering = data.shows.filter(show =>
      `${show.title} ${show.description}`.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;

    expect(component.find(ShowCard).length).toEqual(showsRendering);
  });
});
