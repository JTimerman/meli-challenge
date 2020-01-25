import React from "react";
import { Link } from "react-router-dom";
import "./ItemsList.scss";

import items from "./mockData.json";

function formatPrice(price) {
  return `${
    price.currency === "ARS" ? "$ " : "U$S "
  }${price.amount.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
}

export function ItemsList() {
  return (
    <ol className={"items-list"}>
      {items.map((item, index) => (
        <li key={index} className={"items-list-item"}>
          <Link
            to={{
              pathname: `/items/${item.id}`
            }}
          >
            <img src={item.picture} alt={item.title} />
          </Link>
          <div className={"item-data"}>
            <p className={"item-price"}>
              {formatPrice(item.price)}
              {item.price.decimals ? (
                <span className={"item-price-decimals"}>
                  {item.price.decimals}
                </span>
              ) : null}
            </p>
            {item.free_shipping ? (
              <span className={"item-free-shipping"}>Env&iacute;o Gratis!</span>
            ) : null}
            <Link
              className={"item-title"}
              to={{
                pathname: `/items/${item.id}`
              }}
            >
              <p>{item.title}</p>
            </Link>
          </div>
          <p className={"item-condition"}>
            {item.condition === "new" ? "Nuevo" : "Usado"}
          </p>
        </li>
      ))}
    </ol>
  );
}
