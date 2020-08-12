import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./main/Home.react";
import ProblemList from "./main/ProblemList.react"
import Problem from "./main/problem/Problem.react"
import * as problemNav from "./main/problem" 
import "tabler-react/dist/Tabler.css";

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/problem" component={ProblemList} />
          <Route exact path="/problem/:id" component={Problem} />
          <Route exact path="/submit/:id" component={problemNav.Submit} />
          <Route exact path="/replay/:id" component={problemNav.Replay} />
          <Route exact path="/match/:id" component={problemNav.match} />
          <Route exact path="/code/my/:id" component={problemNav.code} />
          <Route exact path="/matchlog/:id" component={problemNav.matchlog} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
