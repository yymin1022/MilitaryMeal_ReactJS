import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import RouteLayout from "./layout/RouteLayout";

import MealView from "./route/MealView";
import MenuDetail from "./layout/MenuDetail/MenuDetail";
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
        <RouteLayout
          exact
          path = "/menuDetail"
          layout = {DefaultLayout}
          component = {MenuDetail} />
      </Switch>
    </Router>
  );
}

export default App;