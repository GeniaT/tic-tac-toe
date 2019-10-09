import React from 'react';
import { mount, shallow } from 'enzyme';
import Board from '../components/Board';

describe('<Board />', () => {
  it('should render the Board component with its title', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<h1>Tic Tac Toe game !</h1>)).toEqual(true);
  });
});