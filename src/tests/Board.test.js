import React from 'react';
import { mount, shallow } from 'enzyme';
import Board from '../components/Board';

describe('<Board />', () => {
  it('should render the Board component with its title', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<h1>Tic Tac Toe game !</h1>)).toEqual(true);
  });

  it('should have in state an array of 9 null elements', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.state('tiles')).toEqual([null,null,null,null,null,null,null,null,null])
  });

  it('should set the player to X when game starts', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.state('currentlyPlaying')).toEqual('X');
  })
});