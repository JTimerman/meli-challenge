import React from "react";
import "./SearchBox.scss";

export function SearchBox() {
  return (
    <form role="search">
      <input
        type="text"
        class="search-box-input"
        aria-label="Ingresá lo que quieras encontrar"
        placeholder="Nunca dejes de buscar"
        maxlength="120"
        autofocus=""
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        autocomplete="off"
        tabindex="2"
      />
      <button type="submit" class="search-box-btn" tabindex="3">
        <div role="img" aria-label="Buscar" class="search-box-icon"></div>
      </button>
    </form>
  );
}
