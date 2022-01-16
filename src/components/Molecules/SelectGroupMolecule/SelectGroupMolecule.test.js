import React from 'react';
import { shallow, configure } from 'enzyme';
import SelectGroupMolecule from './SelectGroupMolecule'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import mockInput from  '../../../core/mocks/inputMock';

configure({adapter: new Adapter()});

describe('Credit SelectGroupMolecule Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<SelectGroupMolecule select={mockInput}/>);
        expect(wrapper.find('div').exists()).toBe(true);
    })
})