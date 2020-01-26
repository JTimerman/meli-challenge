import React from "react";
import Item from "./Item";
import "./ItemsList.scss";

export function ItemsList({ items }) {
  return (
    <ol className={"items-list"}>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </ol>
  );
}
