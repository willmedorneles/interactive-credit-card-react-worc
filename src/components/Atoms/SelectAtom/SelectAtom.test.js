import React from 'react';
import { shallow, configure } from 'enzyme';
import SelectAtom from './SelectAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import mockSelect from '../../../core/mocks/selectMock';

configure({adapter: new Adapter()});

describe('Credit SelectAtom Page test', () => {
  test('should render the component', () =>{
      const wrapper = shallow(<SelectAtom/>);
      expect(wrapper.find('select').exists()).toBe(true);
  })

  test('should render options', () =>{
    const wrapper = shallow(<SelectAtom {...mockSelect }/>);
    expect(wrapper.find('option').exists()).toBe(true);
  })

  test('should render correct number of options', () =>{
    const wrapper = shallow(<SelectAtom {...mockSelect }/>);

    expect(wrapper.find('option').length).toEqual(3);
  })

  test('must call onChange', () => {
    const onChange = jest.fn();
    mockSelect.onChange = onChange;
    const wrapper = shallow(<SelectAtom {...mockSelect }/>);
    const mockEvent = { target: { value: 'This is just for test' } };
    wrapper.find('select').simulate('change', mockEvent);
    expect(onChange).toHaveBeenCalledWith(mockEvent);
  });
})