import React from 'react';
import { shallow, configure } from 'enzyme';
import InteractiveCardOrganism from './InteractiveCardOrganism'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('ButtonAtom test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<InteractiveCardOrganism/>);
    expect(wrapper.find('div').exists()).toBe(true);
  })
})