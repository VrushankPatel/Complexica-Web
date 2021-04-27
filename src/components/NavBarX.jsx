import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/imgs/logo.png";
import util from "../utilities/Util";

class CNavBar extends Component {
  state = { page: this.props.page };

  getActiveLabelBold = (activeLabel) => {
    return `font-weight-${this.state.page === activeLabel ? "bold" : "normal"}`;
  };

  componentDidMount() {
    this.setState({ page: util.getUrlEndPoint() });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <img src={logo} width="80" height="50" alt="" />
          <Navbar.Brand
            href="/home"
            style={{
              fontFamily: "Exo",
              fontSize: "XX-Large",
              color: "#2b2b2a",
            }}
          >
            Colorizer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className={this.getActiveLabelBold("Home")}
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/api"
                className={this.getActiveLabelBold("Api")}
              >
                Tools & API
              </Nav.Link>

              <Nav.Link
                href="/about"
                className={this.getActiveLabelBold("About")}
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CNavBar;
