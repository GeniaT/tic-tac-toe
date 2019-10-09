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
  });

  it('should render the Board component with 9 Tiles', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.tiles').children()).toHaveLength(9)
  });

  it('should render the 9 Tiles with unique key', () => {
    const wrapper = shallow(<Board />);
    const keys = [];
    wrapper.find('.tiles').children().forEach((tile) => keys.push(tile.key()))
    expect(new Set(keys).size).toEqual(9);
  });
});