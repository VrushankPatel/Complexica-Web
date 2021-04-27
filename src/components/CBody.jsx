import { Component } from "react";
import CUploadPicture from "./UploadPicture";
import animGif from "../assets/gifs/colorized.gif";
import { Container, Row, Col, Image } from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Container>
        <Row className="row justify-content-center">
          <Col
            lg={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0px 100px 0px"
            }}
          >
            <Col
              style={{
                textAlign: "left",
                fontFamily: "Arial",
              }}
            >
              <h2
                className="h2"
                style={{
                  fontSize: "xxx-large",
                  fontWeight: "900",
                  color: "#363634",
                }}
              >
                Colorize your b/w photo
              </h2>
              <h2>100% Automatic and Free</h2>
              <Image src={animGif}
                className="w-5" fluid />
            </Col>
          </Col>
          <Col
            lg={4}
            className="pl-lg-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CUploadPicture />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;
