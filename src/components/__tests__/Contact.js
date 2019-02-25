import React from "react";
import { shallow } from "enzyme";
import Contact from "../Contact";

describe("Contact", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      process.env.REACT_APP_ARIEL_EMAIL = "john@example.com";
      const component = shallow(<Contact />);
      expect(component).toMatchSnapshot();
    });
  });
});
