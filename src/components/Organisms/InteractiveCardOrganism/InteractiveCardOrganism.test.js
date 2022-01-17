import React from 'react';
import { shallow, configure } from 'enzyme';
import InteractiveCardOrganism from './InteractiveCardOrganism'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('InteractiveCardOrganism test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<InteractiveCardOrganism referencesCard={{cardNumber: '', cardHolder: '', cardExpiration: ''}}/>);
    expect(wrapper.find('div').exists()).toBe(true);
  })
})