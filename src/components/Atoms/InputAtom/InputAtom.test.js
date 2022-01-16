import React from 'react';
import { shallow, configure } from 'enzyme';
import InputAtom from './InputAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('InputAtom test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<InputAtom/>);
        expect(wrapper.find('div').exists()).toBe(true);
    })
})