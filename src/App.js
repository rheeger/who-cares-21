import React from "react";
import Splash from "./splash/splash";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Splash} />
      </Switch>
    </Router>
  );
}

export default App;
