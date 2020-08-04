import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  Email,
  ProfilePage,
} from "./pages";

import HomePage from "./HomePage.react";
import ProblemPage from "./ProblemPage.react"

import "tabler-react/dist/Tabler.css";
import mc from "./App.css";
import "./my.css";
type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/problems" component={ProblemPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
