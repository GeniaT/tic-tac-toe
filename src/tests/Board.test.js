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

  it('should set the game status to "on" when game starts', () => {
    const wrapper = shallow(<Board />);

    expect(wrapper.state('gameStatus')).toEqual('on');
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

  it('should render 9 Tiles with displayed X or O from the Board state', () => {
    const wrapper = mount(<Board />);

    wrapper.setState({
      tiles: ['X',null,null,null,'X',null,null,null,'O']
    });

    expect(wrapper.find('.tiles').children().at(0).text()).toEqual('X');
    expect(wrapper.find('.tiles').children().at(2).text()).toEqual('');
    expect(wrapper.find('.tiles').children().at(8).text()).toEqual('O');
  });

  it('should prevent to replace an already clicked tile with a new label from Board currentlyPlaying info', () => {
    const wrapper = mount(<Board />);

    wrapper.setState({
      tiles: ['X',null,null,null,null,null,null,null,null],
      currentlyPlaying: 'O'
    });
    wrapper.find('.tiles').children().at(0).simulate('click')

    expect(wrapper.find('.tiles').children().at(0).text()).toEqual('X');
  });

  it('should replace an unclicked tile with a new label from Board currentlyPlaying info', () => {
    const wrapper = mount(<Board />);

    wrapper.setState({
      tiles: ['X',null,null,null,null,null,null,null,null],
      currentlyPlaying: 'O'
    });
    wrapper.find('.tiles').children().at(1).simulate('click')

    expect(wrapper.find('.tiles').children().at(1).text()).toEqual('O');
  });

  it('should detect if there is a win when a column is full of X or Os', () => {
    const wrapper = mount(<Board />);
    const instance = wrapper.instance();

    wrapper.setState({
      tiles: ['X',null,null,'X',null,null,'X',null,null]
    });

    expect(instance.checkWin('X')).toEqual(true);
  });

  it('should detect if there is a win when a row is full of X or Os', () => {
    const wrapper = mount(<Board />);
    const instance = wrapper.instance();

    wrapper.setState({
      tiles: ['X','X','X',null,null,null,null,null,null]
    });

    expect(instance.checkWin('X')).toEqual(true);
  });

  it('should detect if there is a win when a diagonal or anti-diagonal is full of X or Os', () => {
    const wrapper = mount(<Board />);
    const instance = wrapper.instance();

    wrapper.setState({
      tiles: ['X','X','O',null,'O',null,'O',null,null]
    });

    expect(instance.checkWin('O')).toEqual(true);
  });

  it('should change the player after an empty Tile has been clicked', () => {
    const wrapper = mount(<Board />);
    const instance = wrapper.instance();

    wrapper.setState({currentlyPlaying: 'O'});
    wrapper.find('.tiles').children().at(2).simulate('click')

    expect(instance.state).toEqual({
        tiles: [null,null,'O',null,null,null,null,null,null],
        currentlyPlaying: 'X',
        gameStatus: 'on'
    })
  });

  it('should endGame when the Board has been fully clicked without changing the player', () => {
    const wrapper = mount(<Board />);
    const instance = wrapper.instance();
    
    wrapper.setState({
        tiles: ['X','O',null,'O','X','X','O','X','O'],
        currentlyPlaying: 'O',
        gameStatus: 'on'
    });
    wrapper.find('.tiles').children().at(2).simulate('click')

    expect(instance.state).toEqual({
        tiles: ['X','O','O','O','X','X','O','X','O'],
        currentlyPlaying: 'O',
        gameStatus: "it's a tie!"
    })
  });
});