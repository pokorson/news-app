import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";

describe("<Button />", () => {
  const defaultProps = {
    onClick: jest.fn(),
    label: "test label"
  };

  it("Renders label from props", () => {
    const wrapper = shallow(<Button {...defaultProps} label="show me label" />);
    expect(wrapper.text()).toEqual("show me label");
  });

  it("Renders correct button type", () => {
    const primaryWrapper = shallow(<Button {...defaultProps} />);
    const secondayWrapper = shallow(
      <Button {...defaultProps} btnType="secondary" />
    );

    expect(primaryWrapper.hasClass("ButtonPrimary")).toBe(true);
    expect(secondayWrapper.hasClass("ButtonSecondary")).toBe(true);
  });

  it("Invokes onClick prop on mouse click", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button {...defaultProps} onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toBeCalledTimes(1);
  });
});
