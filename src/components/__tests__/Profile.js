import React from "react";
import { shallow } from "enzyme";
import Profile from "../Profile";

describe("Profile", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      process.env.REACT_APP_ARIEL_EMAIL = "john@example.com";
      process.env.REACT_APP_ARIEL_PHONE = "+1234567890";
      const component = shallow(<Profile />);
      expect(component).toMatchSnapshot();
    });
  });
});
