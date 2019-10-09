import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Board from '../components/Board';

describe('<Board />', () => {
  it('should render the App component with Board inside it', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Board />)).toEqual(true);
  });
});