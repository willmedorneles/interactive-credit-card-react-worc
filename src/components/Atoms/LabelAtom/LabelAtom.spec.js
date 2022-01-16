import React from 'react';
import { shallow, configure } from 'enzyme';
import LabelAtom from './LabelAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('LabelAtom test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<LabelAtom>test</LabelAtom>);
        expect(wrapper.find('label').exists()).toBe(true);
    })
})