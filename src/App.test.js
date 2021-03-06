import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('Credit Card Page test', () => {
    test('should render the component', () =>{
        const wrapper = shallow(<App/>);
        expect(wrapper.find('section').exists()).toBe(true);
    })
})