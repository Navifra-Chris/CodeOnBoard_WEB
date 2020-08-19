import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./main/Home.react";
import ProblemList from "./main/ProblemList.react"
import Problem from "./main/problem/Problem.react"
import Replay from "./main/Replay/replay.react" 
import Match from "./main/match/match.react"
import CodeList from "./main/codeList.react"
import Matchlog from "./main/matchlog.react"
import login from "./login/login.react"
import "tabler-react/dist/Tabler.css";

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/problem" component={ProblemList} />
          <Route exact path="/problem/:id" component={Problem} />
          <Route exact path="/replay/:id" component={Replay} />
          <Route exact path="/match/:id" component={Match} />
          <Route exact path="/code/my/" component={CodeList} />
          <Route exact path="/matchlog/:id" component={Matchlog} />
          <Route exact path="/login" component={login} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;

