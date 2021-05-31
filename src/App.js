import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";

import DefaultLayout from "./layout/Default";
import EmptyLayout from "./layout/Empty";
import RouteLayout from "./layout/RouteLayout";

import LoginView from "./route/LoginView";
import MealView from "./route/MealView";
import MenuDetail from "./route/MenuDetail";
import RankView from "./route/RankView";

function App() {
  return (
    <Router>
      <Switch>
        <RouteLayout
          exact
          path="/"
          layout={DefaultLayout}
          component={MealView} />
        <RouteLayout
          path="/login"
          layout={EmptyLayout}
          component={LoginView} />
        <RouteLayout
          path="/menuDetail"
          layout={DefaultLayout}
          component={MenuDetail} />
        <RouteLayout
          path="/rank"
          layout={DefaultLayout}
          component={RankView} />
      </Switch>
    </Router>
  );
}

export default App;