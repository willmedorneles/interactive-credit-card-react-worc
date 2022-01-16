import React from 'react';
import { shallow, configure } from 'enzyme';
import CreditCardInformationFormOrganism from './CreditCardInformationFormOrganism'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('Credit CreditCardInformationFormOrganism Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<CreditCardInformationFormOrganism/>);
        expect(wrapper.find('div').exists()).toBe(true);
    })
})