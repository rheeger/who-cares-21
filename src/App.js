import React from "react";
import Splash from "./pages/home";
import { Router, Route, Switch } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

import history from "./history";
import RobbieAndRel from "./pages/robbieandrel";
import Accomodations from "./pages/accomodations";

function App() {
  return (
    <HttpsRedirect>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/about" exact component={RobbieAndRel} />
        <Route path="/accomodations" exact component={Accomodations} />
      </Switch>
    </Router>
    </HttpsRedirect>
  );
}

export default App;
