import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import DetailView from "../../views/Detail";
import SearchView from "../../views/Search";

export function NavigationContent() {
  const query = new URLSearchParams(useLocation().search);

  return (
    <main role="main">
      <Switch>
        <Route
          exact
          path="/items"
          render={() => <SearchView search={query.get("search")} />}
        />
        <Route path="/items/:id" component={DetailView} />
      </Switch>
    </main>
  );
}
