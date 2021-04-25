import { Component } from "react";
import CNavBar from "../components/cNavBar";

class Api extends Component {
  state = {};
  componentDidMount() {
    document.title = "Colorizer : API & Tools";
  }
  render() {
    return (
      <div>
        <CNavBar page="api" />
        api and tools
      </div>
    );
  }
}

export default Api;
