import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import RouteLayout from "./layout/RouteLayout";
import DefaultLayout from "./layout/Default";

import MealView from "./route/MealView";
import RankView from "./route/RankView";

function App() {
  return (
    <Router>
      <Switch>
        <RouteLayout
          exact
          path = "/"
          layout = {DefaultLayout}
          component = {MealView} />
        <RouteLayout
          exact
          path = "/rank"
          layout = {DefaultLayout}
          component = {RankView} />
      </Switch>
    </Router>
  );
}

export default App;