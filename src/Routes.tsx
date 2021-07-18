import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/components/Home";
import Navbar from "./core/components/Navbar";
import Search from "./core/pages/Search";
import Form from "./core/pages/Search/profile";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Route path="/" exact>
      <Home />
    </Route>
    <Switch>
      <>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/search/profile">
          <Form />
        </Route>
      </>
    </Switch>
  </BrowserRouter>
);

export default Routes;
