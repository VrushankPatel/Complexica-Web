import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Body extends Component {
  render() {
    const txtStyle = {
      fontSize: "xxx-large",
      fontWeight: "900",
      color: "#363634",
      fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      // paddingTop: "220px",
      // paddingLeft: "50px",
    };

    return (
      <Container>
        <Row className="justify-content-center">
          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Row>
              <h3
                className="pt-5"
                style={txtStyle}
              >
                Complexica v1
              </h3>
            </Row>


          </Col>
          {/* <Col
            lg={4}
            className="pt-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CUploadPicture />
          </Col> */}
        </Row>
      </Container >
    );
  }
}

export default Body;
