import { Component } from "react";


class AboutView extends Component {
  state = {};
  componentDidMount() {
    document.title = "Colorizer : About";
  }
  render() {
    return "about";
  }
}

export default AboutView;
