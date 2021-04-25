import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/imgs/logo.png";

class CNavBar extends Component {
  state = { page: this.props.page };

  // changeNavButtons = () => {
  //   this.setState({ isHome: !this.state.isHome });
  //   alert(JSON.stringify(this.state));
  // };

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
                className={`font-weight-${
                  this.state.page === "home" ? "bold" : "normal"
                }`}
                href="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/api"
                className={`font-weight-${
                  this.state.page === "api" ? "bold" : "normal"
                }`}
              >
                Tools & API
              </Nav.Link>
              <Nav.Link
                href="/about"
                className={`font-weight-${
                  this.state.page === "about" ? "bold" : "normal"
                }`}
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
