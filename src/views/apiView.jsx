import { Component } from "react";
import ApiBody from "../components/ApiBody";

class Api extends Component {
  state = {};
  componentDidMount() {
    document.title = "Colorizer : API & Tools";
  }
  render() {
    return (

      <ApiBody />

    );
  }
}

export default Api;
