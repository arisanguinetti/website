import React from "react";
import { shallow } from "enzyme";
import Navbar from "../Navbar";

describe("Navbar", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(<Navbar />);
      expect(component).toMatchSnapshot();
    });
  });
});
