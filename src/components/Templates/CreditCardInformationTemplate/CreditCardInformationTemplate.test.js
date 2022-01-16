import React from 'react';
import { shallow, configure } from 'enzyme';
import CreditCardInformationTemplate from './CreditCardInformationTemplate'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('Credit Card Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<CreditCardInformationTemplate/>);
        expect(wrapper.find('div').exists()).toBe(true);
    })
})