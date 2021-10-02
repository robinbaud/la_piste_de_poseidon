import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Va from "./va";
import H from "./h";
import A from "./a";
import N from "./n";
import E from "./e";
import Navbar from "./navbar"
import { Redirect, useHistory } from "react-router";

function App() {
  const history = useHistory();
  const redirect = () => {
    let path = '/h';
    history.push(path)
  }
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/h">
            <H/>
            <Redirect to="/h"/>
          </Route> 
          <Route exact path="/h/a">
            <A/>
          </Route>
          <Route exact path="/h/a/va">
            <Va/>
          </Route>
          <Route exact path="/h/a/va/n">
            <N/>
          </Route>
          <Route exact path="/h/a/va/n/e">
            <E/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
