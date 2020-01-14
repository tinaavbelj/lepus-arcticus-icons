import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Icons from "./components/Icons";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Icons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
