import { Component } from "react";
import CUploadPicture from "./UploadPicture";
import animGif from "../assets/gifs/colorized.gif";
import { Container, Row, Col, Image } from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col
            lg={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              <Image src={animGif} width={800}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "30px",
                  boxShadow:
                    "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20)",
                }}
                className="w-5" fluid />
            </Col>
          </Col>
          <Col
            lg={4}
            className="pt-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CUploadPicture />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Body;
