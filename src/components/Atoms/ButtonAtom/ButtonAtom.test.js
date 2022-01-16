import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonAtom from './ButtonAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('ButtonAtom test', () => {
  test('should render the component', () =>{
    const wrapper = shallow(<ButtonAtom>Test</ButtonAtom>);
    expect(wrapper.find('button').exists()).toBe(true);
  })
  test('should call function on click', () =>{
    const mockOnClick = jest.fn();
    const wrapper = shallow(<ButtonAtom onClick={mockOnClick}>Test</ButtonAtom>);
    wrapper.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  })
})