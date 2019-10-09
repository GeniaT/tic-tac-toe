import React from 'react';
import { shallow } from 'enzyme';
import Tile from '../components/Tile';

describe('<Tile />', () => {
    it('should render the Tile component with its id', () => {
      const wrapper = shallow(<Tile />);
      wrapper.setProps({id: "1"})
      expect(wrapper.html()).toEqual('<div id="1" class="tile"></div>');
    });

    it('should render the tile with content from label prop', () => {
        const wrapper = shallow(<Tile />);
        wrapper.setProps({label: "X"})
        expect(wrapper.html()).toEqual('<div class="tile">X</div>');
      });
});