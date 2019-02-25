import React from "react";
import { shallow } from "enzyme";
import Hero from "../Hero";

describe("Hero", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(<Hero />);
      expect(component).toMatchSnapshot();
    });
  });
});
