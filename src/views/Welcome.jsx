import { Component } from "react";
import CNavBar from "../components/cNavBar";
import Body from "../components/body";

class AboutView extends Component {
  state = {};
  render() {
    return (
      <div>
        <CNavBar isHome={true} page={"home"} />
        <Body />
      </div>
    );
  }
}

export default AboutView;
