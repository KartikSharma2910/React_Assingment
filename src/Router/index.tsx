import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InfoPage from "../components/InfoPage";
import PageLayout from "../components/PageLayout";
const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageLayout} />
        <Route exact path="/InfoPage/:id" component={InfoPage} />
      </Switch>
    </Router>
  );
};

export default MyRouter;
