import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBox.scss";

export function SearchBox() {
  const [query, setQuery] = useState("");
  let history = useHistory();

  function searchQuery(event) {
    event.preventDefault();
    history.push(`/items?search=${query}`);
  }

  return (
    <form className="search-box-form" role="search" onSubmit={searchQuery}>
      <input
        type="text"
        className="search-box-input"
        aria-label="Ingresá lo que quieras encontrar"
        placeholder="Nunca dejes de buscar"
        maxLength="120"
        tabIndex="2"
        onChange={event => setQuery(event.target.value)}
      />
      <button type="submit" className="search-box-btn" tabIndex="3" />
    </form>
  );
}
