import React from "react";
import Splash from "./pages/home";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import RobbieAndRel from "./pages/robbieandrel";
import Accomodations from "./pages/accomodations";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/about" exact component={RobbieAndRel} />
        <Route path="/accomodations" exact component={Accomodations} />
      </Switch>
    </Router>
  );
}

export default App;
