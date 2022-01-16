import React from 'react';
import { shallow, configure } from 'enzyme';
import InteractiveCreditCardCharacter from './InteractiveCreditCardCharacter'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('InteractiveCreditCardCharacter test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<InteractiveCreditCardCharacter>A</InteractiveCreditCardCharacter>);
    expect(wrapper.find('div').exists()).toBe(true);
  })
})