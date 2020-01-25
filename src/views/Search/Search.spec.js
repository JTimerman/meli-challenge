import React from "react";
import { Search } from "./Search";
import shallow from "enzyme/shallow";

describe("The Search component", () => {
  describe("when it renders", () => {
    it("should contain a search view", () => {
      const searchWrapper = shallow(<Search />);

      const content = searchWrapper.text();

      expect(content).toBe("Search view");
    });
  });
});
