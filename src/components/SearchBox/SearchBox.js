import React from "react";
import "./SearchBox.scss";

export function SearchBox() {
  return (
    <form className="search-box-form" role="search">
      <input
        type="text"
        className="search-box-input"
        aria-label="Ingresá lo que quieras encontrar"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        autoFocus=""
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        tabIndex="2"
      />
      <button type="submit" className="search-box-btn" tabIndex="3" />
    </form>
  );
}
