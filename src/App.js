import WelcomeView from "./views/Welcome";
import AboutView from "./views/About";
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
      </div>
    </Router>
  );
}

export default App;
