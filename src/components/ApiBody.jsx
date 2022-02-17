import { Component } from "react";
import CUploadPicture from "./CUploadPicture";
import { Container, Row, Col } from "react-bootstrap";

class Body extends Component {
  state = { showToast: false }
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col
            lg={7}
            md={10}
            sm={12}
            xs={12}
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
