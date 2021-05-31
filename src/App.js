import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import RouteLayout from "./layout/RouteLayout";

import LoginView from "./route/LoginView";
import MealView from "./route/MealView";
import MenuDetail from "./route/MenuDetail";
import RankView from "./route/RankView";

function App() {
  return (
    <Router>
      <RouteLayout
          exact
          path = "/login"
          layout = {<div></div>}
          component = {LoginView} />
      <Switch>
        <RouteLayout
          exact
          path = "/"
          layout = {DefaultLayout}
          component = {MealView} />
        
        <RouteLayout
          exact
          path = "/menuDetail"
          layout = {DefaultLayout}
          component = {MenuDetail} />
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