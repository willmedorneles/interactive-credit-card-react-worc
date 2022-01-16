import React from 'react';
import { shallow, configure } from 'enzyme';
import InteractiveCreditCardHolder from './InteractiveCreditCardHolder'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import creditCardInputMock from '../../../core/mocks/creditCardInputMock';
configure({adapter: new Adapter()});

describe('InteractiveCreditCardHolder test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<InteractiveCreditCardHolder {...creditCardInputMock}/>);
    expect(wrapper.find('div').exists()).toBe(true);
  })
})