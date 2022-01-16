import React from 'react';
import { shallow, configure } from 'enzyme';
import InteractiveCreditCardNumber from './InteractiveCreditCardNumber'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import creditCardInputMock from '../../../core/mocks/creditCardInputMock';
configure({adapter: new Adapter()});

describe('InteractiveCreditCardNumber test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<InteractiveCreditCardNumber {...creditCardInputMock}/>);
    expect(wrapper.find('div').exists()).toBe(true);
  })
})