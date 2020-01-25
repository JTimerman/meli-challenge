import React from "react";
import { Switch, Route } from "react-router-dom";
import DetailView from "../../views/Detail";
import SearchView from "../../views/Search";

export function NavigationContent() {
  return (
    <main role="main">
      <Switch>
        <Route exact path="/items" component={SearchView} />
        <Route path="/items/:id" component={DetailView} />
      </Switch>
    </main>
  );
}
