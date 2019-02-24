import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";

describe("Footer", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(<Footer />);
      expect(component).toMatchSnapshot();
    });
  });
});
