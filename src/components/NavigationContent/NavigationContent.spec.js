import React from "react";
import { NavigationContent } from "./NavigationContent";
import shallow from "enzyme/shallow";

describe("The NavigationContent component", () => {
  describe("when it renders", () => {
    it("should contain a Switch component", () => {
      const navigationContentWrapper = shallow(<NavigationContent />);

      const switchWrapper = navigationContentWrapper.find("Switch");

      expect(switchWrapper).toBeDefined();
    });

    describe("The Switch component", () => {
      it("should have a Route for /items", () => {
        const navigationContentWrapper = shallow(<NavigationContent />);

        const itemsRoute = navigationContentWrapper.find("Route").at(0);

        expect(itemsRoute.prop("path")).toBe("/items");
      });

      describe("the /items Route", () => {
        it("should point to the SearchView component", () => {
          const navigationContentWrapper = shallow(<NavigationContent />);
          const itemsRoute = navigationContentWrapper.find("Route").at(0);
          const SearchComponent = itemsRoute.prop("component");
          const searchViewWrapper = shallow(<SearchComponent />);

          const searchElement = searchViewWrapper.find(".search-view");

          expect(searchElement).toBeDefined();
        });
      });

      it("should have a Route for /items/:id", () => {
        const navigationContentWrapper = shallow(<NavigationContent />);

        const itemsRoute = navigationContentWrapper.find("Route").at(1);

        expect(itemsRoute.prop("path")).toBe("/items/:id");
      });

      describe("the /items/:id Route", () => {
        it("should point to the DetailView component", () => {
          const navigationContentWrapper = shallow(<NavigationContent />);
          const itemsRoute = navigationContentWrapper.find("Route").at(1);
          const DetailComponent = itemsRoute.prop("component");
          const detailViewWrapper = shallow(<DetailComponent />);

          const detailElement = detailViewWrapper.find(".detail-view");

          expect(detailElement).toBeDefined();
        });
      });
    });
  });
});
