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

    test('should not be render when no text passed', () => {
      const wrapper = shallow(<LabelAtom/>);
      expect(wrapper.find('label').exists()).toBe(false);
    });
  
    test('should render a label tag', () => {
      const wrapper = shallow(<LabelAtom text="Email">Text</LabelAtom>);
      expect(wrapper.find('label').exists()).toBe(true);
    });
  
    test('should render htmlFor property ', () => {
      const wrapper = shallow(<LabelAtom htmlFor="my-id">Text</LabelAtom>);
      expect(wrapper.find('label').prop('htmlFor')).toEqual('my-id');
    });
})