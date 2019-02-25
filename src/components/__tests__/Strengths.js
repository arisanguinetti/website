import React from "react";
import { shallow } from "enzyme";
import Strengths from "../Strengths";

describe("Strengths", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(<Strengths />);
      expect(component).toMatchSnapshot();
    });
  });
});
