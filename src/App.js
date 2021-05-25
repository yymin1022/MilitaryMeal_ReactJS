import React from "react";
import {BrowserRouter as Router, Switch, withRouter} from "react-router-dom";

import RouteLayout from "./layout/RouteLayout";
import DefaultLayout from "./layout/Default";

import MealView from "./route/MealView";
import RankView from "./route/RankView";

function App() {
  return (
    <Router>
      <ScrollTop>
        <Switch>
          <RouteLayout
            exact
            path = "/"
            layout = {DefaultLayout}
            component = {withRouter(MealView)} />
          <RouteLayout
            exact
            path = "/rank"
            layout = {DefaultLayout}
            component = {withRouter(RankView)} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;