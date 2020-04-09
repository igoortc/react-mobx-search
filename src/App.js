import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ModelerPage from "./pages/ModelerPage";
import FrameworksPage from "./pages/FrameworksPage";

import { Container } from "./components/Container";
import Navigation from "./components/Navigation";

export default () => (
  <div>
    <Navigation />
    <hr />
    <Container>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/modeler" component={ModelerPage} />
        <Route exact path="/frameworks" component={FrameworksPage} />
      </Switch>
    </Container>
  </div>
);
