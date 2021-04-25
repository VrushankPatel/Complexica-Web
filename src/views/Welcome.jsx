import { Component } from "react";
import CNavBar from "../components/cNavBar";

import Body from "../components/body";

class AboutView extends Component {
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

export default AboutView;
