import React from "react";
import { shallow, configure } from "enzyme";
import InteractiveCreditCardExpiration from "./InteractiveCreditCardExpiration";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import creditCardInputMock from "../../../core/mocks/creditCardInputMock";
configure({ adapter: new Adapter() });

const mockExpiration = {
  creditCardExpirationDateMonth:{
    value: "1",
  },
  creditCardExpirationDateYear:{
    value: "2030",
  }
};

describe("InteractiveCreditCardExpiration test", () => {
  test("should render the component", () => {
    const wrapper = shallow(
      <InteractiveCreditCardExpiration {...mockExpiration }
      />
    );
    expect(wrapper.find("div").exists()).toBe(true);
  });
});
