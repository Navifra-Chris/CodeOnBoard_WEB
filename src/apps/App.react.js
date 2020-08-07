import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//   ForgotPasswordPage,
//   LoginPage,
//   RegisterPage,
//   Error400,
//   Error401,
//   Error403,
//   Error404,
//   Error500,
//   Error503,
//   Empty,
//   Email,
//   ProfilePage,
// } from "../pages";

import HomePage from "./main/HomePage.react";
import ProblemListPage from "./main/ProblemListPage.react"
import ProblemPage from "./main/ProblemPage.react"
import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/problems" component={ProblemListPage} />
          <Route exact path="/problems/:id" component={ProblemPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
