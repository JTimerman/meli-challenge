import React from "react";
import { Header } from "./Header";
import shallow from "enzyme/shallow";

describe("The Header component", () => {
  describe("when it renders", () => {
    it("should display a Logo", () => {
      const headerWrapper = shallow(<Header />);

      const logo = headerWrapper.find("img");

      expect(logo).toBeDefined();
    });

    it("should display a SearchBox component", () => {
      const headerWrapper = shallow(<Header />);

      const searchBox = headerWrapper.find("SearchBox");

      expect(searchBox).toBeDefined();
    });
  });
});
