import React from "react";
import "./Breadcrumb.scss";

export function Breadcrumb({ categories }) {
  return (
    <ol className={"breadcrumb"}>
      {categories &&
        categories.map(category => (
          <li className={"breadcrumb-item"} key={category}>
            {category}
          </li>
        ))}
    </ol>
  );
}
