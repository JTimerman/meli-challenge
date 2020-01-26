import React from "react";
import { Detail } from "./Detail";
import shallow from "enzyme/shallow";

describe("The Detail component", () => {
  describe("when it renders", () => {
    describe("when the item exists", () => {
      global.fetch = () => {
        const response = {
          error: false,
          item: {
            id: "ML12345"
          }
        };

        return JSON.stringify(response);
      };

      it("should contain an ItemDetail component", () => {
        const detailWrapper = shallow(
          <Detail match={{ params: { id: "ML12345" } }} />
        );

        const itemDetailWrapper = detailWrapper.find("ItemDetail");

        expect(itemDetailWrapper).toBeDefined();
      });
    });
  });
});
