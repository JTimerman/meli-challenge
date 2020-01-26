import React from "react";
import "./ItemsList.scss";
import Item from "./Item";

import items from "./mockData.json";

export function ItemsList() {
  return (
    <ol className={"items-list"}>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </ol>
  );
}
