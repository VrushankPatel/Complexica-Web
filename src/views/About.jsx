import { Component } from "react";
import CNavBar from "../components/CNavBar";
class WelcomeView extends Component {
  state = {};
  render() {
    return <CNavBar isHome={false} />;
  }
}

export default WelcomeView;
