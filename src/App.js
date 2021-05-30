import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import MealDetailLayout from "./layout/MealDetail/MealDetail";
import RouteLayout from "./layout/RouteLayout";

import MealDetailView from "./route/MealDetailView";
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
        <RouteLayout
          exact
          path = "/mealDetail"
          layout = {MealDetailLayout}
          component = {None} />
      </Switch>
    </Router>
  );
}

export default App;