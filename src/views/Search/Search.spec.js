import React from "react";
import { Search } from "./Search";
import shallow from "enzyme/shallow";

describe("The Search component", () => {
  describe("when it renders", () => {
    it("should contain the ItemsList component", () => {
      const searchWrapper = shallow(<Search />);

      const itemsListWrapper = searchWrapper.find("ItemsList");

      expect(itemsListWrapper).toBeDefined();
    });
  });
});
