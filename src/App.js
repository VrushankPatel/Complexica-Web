import WelcomeView from "./views/welcome";
import AboutView from "./views/about";
import Api from "./views/apiView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <WelcomeView />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <AboutView />
          </Route>
        </Switch>
        <Switch>
          <Route path="/api">
            <Api />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
