import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/imgs/logo.png";

class CNavBar extends Component {
  state = { page: this.props.page };

  getActiveLabelBold = (activeLabel) => {
    return `font-weight-${this.state.page === activeLabel ? "bold" : "normal"}`;
  };

  changeActiveLabelColor = (page) => {
    this.setState({ page: page });
  };

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
                onClick={() => this.changeActiveLabelColor("home")}
                className={this.getActiveLabelBold("home")}
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => this.changeActiveLabelColor("api")}
                href="/api"
                className={this.getActiveLabelBold("api")}
              >
                Tools & API
              </Nav.Link>

              <Nav.Link
                href="/about"
                className={this.getActiveLabelBold("about")}
              >
                About
              </Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CNavBar;
