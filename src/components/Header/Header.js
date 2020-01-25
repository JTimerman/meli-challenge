import React from "react";

import SearchBox from "../SearchBox";

import "./Header.scss";

export function Header() {
  return (
    <header>
      <img
        alt="Mercado Libre"
        className="header-logo"
        src="https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/logo__small.png"
      />
      <SearchBox />
    </header>
  );
}
