import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      process.env.REACT_APP_ARIEL_BIRTHDAY = "2018-02-02";
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    });
  });
});
