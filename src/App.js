import WelcomeView from "./views/welcome";
import AboutView from "./views/about";
import Api from "./views/apiView";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <WelcomeView />
        </Route>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
      </div>
    </Router>
  );
}

export default App;
