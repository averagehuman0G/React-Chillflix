import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewAll from '../ViewAll';

configure({ adapter: new Adapter() });

test('ViewAll renders correctly', () => {
  const componenent = shallow(<ViewAll />);
  expect(componenent).toMatchSnapshot();
});
