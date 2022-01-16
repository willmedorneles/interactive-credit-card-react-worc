import React from 'react';
import { shallow, configure } from 'enzyme';
import CreditCardBackgroundAtom from './CreditCardBackgroundAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('CreditCardBackgroundAtom test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<CreditCardBackgroundAtom>Test</CreditCardBackgroundAtom>);
    expect(wrapper.find('div').exists()).toBe(true);
  })

  test('Must render children', () =>{
    const wrapper = shallow(<CreditCardBackgroundAtom><input></input></CreditCardBackgroundAtom>);
    expect(wrapper.find('input').exists()).toBe(true);
  })
})