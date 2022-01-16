import React from 'react';
import { shallow, configure } from 'enzyme';
import InputGroupMolecule from './InputGroupMolecule'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import mockInput from  '../../../core/mocks/inputMock';

configure({adapter: new Adapter()});

describe('Credit InputGroupMolecule Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<InputGroupMolecule input={mockInput}/>);
        expect(wrapper.find('div').exists()).toBe(true);
    })
})