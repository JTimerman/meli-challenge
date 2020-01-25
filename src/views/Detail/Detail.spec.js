import React from "react";
import { Detail } from "./Detail";
import shallow from "enzyme/shallow";

describe("The Detail component", () => {
  describe("when it renders", () => {
    it("should contain a Detail view", () => {
      const detailWrapper = shallow(<Detail />);

      const content = detailWrapper.text();

      expect(content).toBe("Detail view");
    });
  });
});
