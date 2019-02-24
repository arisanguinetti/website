import React from "react";
import { shallow } from "enzyme";
import Contact from "../Contact";

describe("Contact", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(<Contact />);
      expect(component).toMatchSnapshot();
    });
  });
});
