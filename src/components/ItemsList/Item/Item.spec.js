import React from "react";
import { Item } from "./Item";
import shallow from "enzyme/shallow";

describe("The Item component", () => {
  const shallowRenderItem = customProps => {
    const defaultProps = {
      id: "id",
      title: "title",
      picture: "picture_url",
      price: {
        amount: 100,
        decimals: 12,
        currency: "ARS"
      },
      free_shipping: false,
      condition: "new"
    };

    return shallow(<Item {...defaultProps} {...customProps} />);
  };

  describe("when it renders", () => {
    it("should contain a li", () => {
      const ItemWrapper = shallowRenderItem();

      const li = ItemWrapper.find("li");

      expect(li).toBeDefined();
    });

    describe("the li", () => {
      it("should display a Link component", () => {
        const ItemWrapper = shallowRenderItem();
        const li = ItemWrapper.find("li");

        const linkWrapper = li.find("Link");

        expect(linkWrapper).toBeDefined();
      });

      describe("the Link component", () => {
        it('should link to "/items/:id', () => {
          const id = "ML12345";
          const ItemWrapper = shallowRenderItem({ id });
          const li = ItemWrapper.find("li");

          const linkWrapper = li.find("Link").at(0);

          expect(linkWrapper.prop("to")).toEqual(
            expect.objectContaining({
              pathname: `/items/${id}`
            })
          );
        });

        it("should display an image", () => {
          const ItemWrapper = shallowRenderItem();
          const li = ItemWrapper.find("li");
          const linkWrapper = li.find("Link");

          const image = linkWrapper.find("img");

          expect(image).toBeDefined();
        });

        describe("the image", () => {
          it("should grab the source from the item", () => {
            const picture = "image_uri";
            const ItemWrapper = shallowRenderItem({ picture });
            const li = ItemWrapper.find("li");
            const linkWrapper = li.find("Link");

            const image = linkWrapper.find("img");

            expect(image.prop("src")).toBe(picture);
          });

          it("should have as alt the item`s title", () => {
            const title = "my image";
            const ItemWrapper = shallowRenderItem({ title });
            const li = ItemWrapper.find("li");
            const linkWrapper = li.find("Link");

            const image = linkWrapper.find("img");

            expect(image.prop("alt")).toBe(title);
          });
        });
      });

      it("should display a div with class item-data", () => {
        const ItemWrapper = shallowRenderItem();
        const li = ItemWrapper.find("li");

        const div = li.find("div");

        expect(div.prop("className")).toBe("item-data");
      });

      describe("the item-data div", () => {
        it("should contain a p with class item-price", () => {
          const ItemWrapper = shallowRenderItem();
          const li = ItemWrapper.find("li");
          const div = li.find("div");

          const p = div.find("p").at(0);

          expect(p.prop("className")).toBe("item-price");
        });

        describe("the item-price p", () => {
          describe("when the price is in ARS", () => {
            describe("when the price has decimals", () => {
              it("should display the exact price", () => {
                const price = {
                  amount: 12345,
                  decimals: 10,
                  currency: "ARS"
                };
                const ItemWrapper = shallowRenderItem({ price });
                const li = ItemWrapper.find("li");
                const div = li.find("div");
                const p = div.find("p").at(0);

                const displayedPrice = p.text();

                expect(displayedPrice).toBe("$ 12.34510");
              });
            });

            describe("when the price has no decimals", () => {
              it("should display the exact price", () => {
                const price = {
                  amount: 12345,
                  decimals: null,
                  currency: "ARS"
                };
                const ItemWrapper = shallowRenderItem({ price });
                const li = ItemWrapper.find("li");
                const div = li.find("div");
                const p = div.find("p").at(0);

                const displayedPrice = p.text();

                expect(displayedPrice).toBe("$ 12.345");
              });
            });
          });

          describe("when the price is in U$S", () => {
            describe("when the price has decimals", () => {
              it("should display the exact price", () => {
                const price = {
                  amount: 12345,
                  decimals: 10,
                  currency: "U$S"
                };
                const ItemWrapper = shallowRenderItem({ price });
                const li = ItemWrapper.find("li");
                const div = li.find("div");
                const p = div.find("p").at(0);

                const displayedPrice = p.text();

                expect(displayedPrice).toBe("U$S 12.34510");
              });
            });

            describe("when the price has no decimals", () => {
              it("should display the exact price", () => {
                const price = {
                  amount: 12345,
                  decimals: null,
                  currency: "U$S"
                };
                const ItemWrapper = shallowRenderItem({ price });
                const li = ItemWrapper.find("li");
                const div = li.find("div");
                const p = div.find("p").at(0);

                const displayedPrice = p.text();

                expect(displayedPrice).toBe("U$S 12.345");
              });
            });
          });
        });

        describe("when the item has free_shipping", () => {
          it('should display a span with text "Envío Gratis!"', () => {
            const free_shipping = true;
            const ItemWrapper = shallowRenderItem({ free_shipping });
            const li = ItemWrapper.find("li");
            const div = li.find("div");

            const span = div.find("span").at(1);

            expect(span.text()).toBe("Envío Gratis!");
          });
        });

        it("should contain a Link with class item-title", () => {
          const ItemWrapper = shallowRenderItem();
          const li = ItemWrapper.find("li");
          const div = li.find("div");

          const linkWrapper = div.find("Link");

          expect(linkWrapper.prop("className")).toBe("item-title");
        });
      });

      describe("when the item is new", () => {
        it("should display a p with class item-condition", () => {
          const condition = "new";
          const ItemWrapper = shallowRenderItem({ condition });
          const li = ItemWrapper.find("li");

          const p = li.find("p").at(2);

          expect(p.prop("className")).toBe("item-condition");
        });

        it("should display a p with text 'Nuevo'", () => {
          const condition = "new";
          const ItemWrapper = shallowRenderItem({ condition });
          const li = ItemWrapper.find("li");

          const p = li.find("p").at(2);

          expect(p.text()).toBe("Nuevo");
        });
      });

      describe("when the item is used", () => {
        it("should display a p with class item-condition", () => {
          const condition = "used";
          const ItemWrapper = shallowRenderItem({ condition });
          const li = ItemWrapper.find("li");

          const p = li.find("p").at(2);

          expect(p.prop("className")).toBe("item-condition");
        });

        it("should display a p with text 'Usado'", () => {
          const condition = "used";
          const ItemWrapper = shallowRenderItem({ condition });
          const li = ItemWrapper.find("li");

          const p = li.find("p").at(2);

          expect(p.text()).toBe("Usado");
        });
      });
    });
  });
});
