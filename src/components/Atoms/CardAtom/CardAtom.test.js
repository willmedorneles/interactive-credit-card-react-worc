import React from 'react';
import { shallow, configure } from 'enzyme';
import CardAtom from './CardAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('Card componetent test', () => {

  test('should be render', () => {
    const wrapper = shallow(<CardAtom/>);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});