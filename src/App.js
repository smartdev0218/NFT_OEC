import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/oneeyechild">
          <Home />
        </Route>
        <Route exact path="/story">
          <Home />
        </Route>
        <Route exact path="/roadmap">
          <Home />
        </Route>
        <Route exact path="/faq">
          <Home />
        </Route>
        <Route exact path="/theonemanteam">
          <Home />
        </Route>
        <Route exact path="/footer">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
