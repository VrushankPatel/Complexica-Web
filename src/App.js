import WelcomeView from "./views/WelcomeView";
import AboutView from "./views/AboutView";
import Api from "./views/ApiView";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import CNavBar from "./components/NavBarX";
import {
  React,
  useEffect
} from 'react';
import util from "./utilities/Util";

function App() {
  useEffect(() => {
    document.title = `Complexica : ${util.getUrlEndPoint()}`
  })

  return ( <
    Router >
    <
    div className = "App" >
    <
    CNavBar page = "home" / >
    <
    Route exact path = "/" >
    <
    WelcomeView / >
    <
    /Route> <
    Route path = "/about" >
    <
    AboutView / >
    <
    /Route> <
    Route path = "/api" >
    <
    Api / >
    <
    /Route> <
    /div> <
    /Router>
  );
}

export default App;