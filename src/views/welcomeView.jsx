import { Component } from "react";
import CNavBar from "../components/cNavBarX";

import Body from "../components/body";

class WelcomeView extends Component {
  componentDidMount() {
    document.title = "Colorizer : Home";
  }
  render() {
    return (
      <div>
        <CNavBar page="home" />
        <Body />
      </div>
    );
  }
}

export default WelcomeView;
