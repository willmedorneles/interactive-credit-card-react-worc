import React from "react";
import { shallow, configure } from "enzyme";
import InteractiveCreditCardCvv from "./InteractiveCreditCardCvv";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

const mockCvv = {
  value: '222',
  label: 'test'
};

describe("InteractiveCreditCardCvv test", () => {
  test("should render the component", () => {
    const wrapper = shallow(
      <InteractiveCreditCardCvv {...mockCvv }
      />
    );
    expect(wrapper.find("div").exists()).toBe(true);
  });
});
