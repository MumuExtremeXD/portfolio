import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dev from "../pages/PageDev";
// import NotFound from "../pages/NotFound";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Dev" component={Dev} exact />

      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default Routes;
