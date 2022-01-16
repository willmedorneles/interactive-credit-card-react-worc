import React from 'react';
import { shallow, configure } from 'enzyme';
import SelectAtom from './SelectAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('Credit SelectAtom Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<SelectAtom/>);
        expect(wrapper.find('div').exists()).toBe(true);
    })
})