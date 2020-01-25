import React from "react";
import { Header } from "./Header";
import shallow from "enzyme/shallow";

describe("The Header component", () => {
  describe("when it renders", () => {
    it("should display a Logo", () => {
      const headerWrapper = shallow(<Header />);

      const logo = headerWrapper.text();

      expect(logo).toEqual(expect.stringContaining("Logo"));
    });

    it("should display a SearchBox", () => {
      const headerWrapper = shallow(<Header />);

      const searchBox = headerWrapper.text();

      expect(searchBox).toEqual(expect.stringContaining("Logo"));
    });
  });
});