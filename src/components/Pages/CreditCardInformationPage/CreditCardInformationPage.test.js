import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CreditCardInformationPage from './CreditCardInformationPage'

configure({adapter: new Adapter()});

describe('Credit Card Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<CreditCardInformationPage/>);
        expect(wrapper.find('section').exists()).toBe(true);
    })
})