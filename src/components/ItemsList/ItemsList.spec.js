import React from "react";
import { ItemsList } from "./ItemsList";
import shallow from "enzyme/shallow";

describe("The ItemsList component", () => {
  describe("when it renders", () => {
    it("should contain an ol", () => {
      const itemsListWrapper = shallow(<ItemsList />);

      const ol = itemsListWrapper.find("ol");

      expect(ol).toBeDefined();
    });

    describe("the ol", () => {
      it("should contain an Item for each item defined", () => {
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        const itemsListWrapper = shallow(<ItemsList items={items} />);

        const ol = itemsListWrapper.find("ol");

        expect(ol.children().length).toBe(items.length);
      });
    });
  });
});
