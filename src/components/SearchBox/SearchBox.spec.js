import React from "react";
import { SearchBox } from "./SearchBox";
import { MemoryRouter } from "react-router-dom";
import shallow from "enzyme/shallow";

describe("The SearchBox component", () => {
  describe("when it renders", () => {
    it("should contain a form", () => {
      const searchBoxWrapper = shallow(
        <MemoryRouter>
          <SearchBox />
        </MemoryRouter>
      );

      const form = searchBoxWrapper.find("form");

      expect(form).toBeDefined();
    });

    describe("the form", () => {
      it("should display an input", () => {
        const searchBoxWrapper = shallow(
          <MemoryRouter>
            <SearchBox />
          </MemoryRouter>
        );
        const form = searchBoxWrapper.find("form");

        const input = form.find("input");

        expect(input).toBeDefined();
      });

      it("should display a button", () => {
        const searchBoxWrapper = shallow(
          <MemoryRouter>
            <SearchBox />
          </MemoryRouter>
        );
        const form = searchBoxWrapper.find("form");

        const button = form.find("button");

        expect(button).toBeDefined();
      });
    });
  });
});
