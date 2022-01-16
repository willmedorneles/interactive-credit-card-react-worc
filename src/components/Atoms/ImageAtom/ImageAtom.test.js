import React from 'react';
import { shallow, configure } from 'enzyme';
import ImageAtom from './ImageAtom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('ImageAtom test', () => {
  test('should not be render when no src attribute passed', () => {
    const wrapper = shallow(<ImageAtom/>);
    expect(wrapper.find('img').exists()).toBe(false);
  });

  test('should render and img tag', () => {
    const wrapper = shallow(<ImageAtom src="image.png"/>);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  test('should render src property', () => {
    const wrapper = shallow(<ImageAtom src="image.png"/>);
    expect(wrapper.find('img').prop('src')).toEqual('image.png');
  });

  test('should render alt property', () => {
    const wrapper = shallow(<ImageAtom src="image.png" alt="alternative text" />);
    expect(wrapper.find('img').prop('alt')).toEqual('alternative text');
  });
})