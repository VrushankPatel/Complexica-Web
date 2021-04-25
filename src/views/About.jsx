import { Component } from "react";
import CNavBar from "../components/cNavBar";
class WelcomeView extends Component {
  state = {};
  render() {
    return <CNavBar page="about" />;
  }
}

export default WelcomeView;
