import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

function formatPrice(price) {
  return `${
    price.currency === "ARS" ? "$ " : "U$S "
  }${price.amount.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
}

export function Item({ id, title, picture, price, free_shipping, condition }) {
  return (
    <li className={"items-list-item"}>
      <Link
        to={{
          pathname: `/items/${id}`
        }}
      >
        <img src={picture} alt={title} />
      </Link>
      <div className={"item-data"}>
        <p className={"item-price"}>
          {formatPrice(price)}
          {price.decimals ? (
            <span className={"item-price-decimals"}>{price.decimals}</span>
          ) : null}
        </p>
        {free_shipping ? (
          <span className={"item-free-shipping"}>Env&iacute;o Gratis!</span>
        ) : null}
        <Link
          className={"item-title"}
          to={{
            pathname: `/items/${id}`
          }}
        >
          <p>{title}</p>
        </Link>
      </div>
      <p className={"item-condition"}>
        {condition === "new" ? "Nuevo" : "Usado"}
      </p>
    </li>
  );
}
