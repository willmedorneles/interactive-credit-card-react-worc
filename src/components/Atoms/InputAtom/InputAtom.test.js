import 'jsdom-global/register';
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import InputAtom from './InputAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import inputMock from '../../../core/mocks/inputMock';

configure({adapter: new Adapter()});

describe('InputAtom test', () => {
  test('should render the component', () =>{
      const wrapper = shallow(<InputAtom/>);
      expect(wrapper.find('div').exists()).toBe(true);
  })
  test('must render input', () => {
    const wrapper = shallow(<InputAtom onChange={() => {}} />);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('must render input id', () => {
    inputMock.name = 'test';
    const wrapper = shallow(<InputAtom {...inputMock} />);
    expect(wrapper.find('input').prop('id')).toEqual('test');
  });

  test('must render input type', () => {
    const wrapper = shallow(<InputAtom {...inputMock} />);
    expect(wrapper.find('input').prop('type')).toEqual('text');
  });

  test('must call onBlur function in handleBlur', () => {
    const onBlur = jest.fn();
    inputMock.onBlur = onBlur;
    const wrapper = shallow(<InputAtom {...inputMock} />);
    wrapper.find('input').simulate('blur');
    expect(onBlur).toHaveBeenCalled();
  });

  test('must call onChange', () => {
    const onChange = jest.fn();
    inputMock.onChange = onChange;
    const wrapper = shallow(<InputAtom {...inputMock}/>);
    const mockEvent = { target: { value: 'This is just for test' } };
    wrapper.find('input').simulate('change', mockEvent);
    expect(onChange).toHaveBeenCalledWith(mockEvent);
  });
})