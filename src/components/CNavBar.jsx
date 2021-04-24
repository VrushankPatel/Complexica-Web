import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/imgs/logo.png";
class CNavBar extends Component {
  state = { isHome: this.props.isHome };

  changeNavButtons = () => {
    this.setState({ isHome: !this.state.isHome });
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <img src={logo} width="80" height="50" alt="" />
          <Navbar.Brand href="/home">Colorizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className={`font-weight-${
                  this.state.isHome ? "bold" : "normal"
                }`}
                href="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                className={`font-weight-${
                  this.state.isHome ? "normal" : "bold"
                }`}
              >
                About
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CNavBar;
