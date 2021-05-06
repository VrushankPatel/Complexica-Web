import React, { Component } from "react";
import { Card, Form, Button, ProgressBar } from "react-bootstrap";
import Util from "../utilities/Util"
import "../App.css";

class CUploadPicture extends Component {
  state = { iconColor: "lightGrey", showProgressBar: false, showProgressMessage: false, btnDsbl: false };

  render() {
    const imageExtensions = ["jpg", "png", "jpeg"];
    const uploadPictureBoxStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
      boxShadow:
        "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20)",
    };

    const pictureProcessor = {
      display: this.state.showProgressMessage ? "initial" : "none"
    }

    const handleUpload = (e) => {
      const files = this.fileElement.files;
      if (files.length === 0) {
        return;
      }
      let fileName = files.item(0).name;
      if (!Util.isValidExtension(fileName, imageExtensions)) {
        this.props.showToast();
        return
      }
      this.setState({ showProgressBar: true, showProgressMessage: true, btnDsbl: true })
    }

    return (
      <Card style={uploadPictureBoxStyle}>
        <Card.Header>
          Get Started By Uploading Picture Below
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <svg data-v-4e85f282="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" height="31mm" width="25mm"><path data-v-4e85f282="" d="M.787 6.411l10.012 5.222a.437.437 0 0 0 .402 0l10.01-5.222a.434.434 0 0 0 .186-.585.45.45 0 0 0-.186-.187L11.2.417a.441.441 0 0 0-.404 0L.787 5.639a.439.439 0 0 0-.184.588.453.453 0 0 0 .184.184z" fill="#DDDFE1"></path><path data-v-4e85f282="" d="M21.21 9.589l-1.655-.864-7.953 4.148a1.31 1.31 0 0 1-1.202 0L2.444 8.725l-1.657.864a.437.437 0 0 0-.184.583.427.427 0 0 0 .184.187l10.012 5.224a.437.437 0 0 0 .402 0l10.01-5.224a.434.434 0 0 0 .186-.586.444.444 0 0 0-.186-.184z" fill="#EDEFF0"></path></svg>
          </Card.Title>
          <Button variant="primary" onClick={() => { this.fileElement.click() }} disabled={this.state.btnDsbl}>Upload Picture</Button>

          <Form.Group>
            <Form.File ref={fileElement => this.fileElement = fileElement} style={{ display: "none " }}
              onChange={handleUpload} accept="image/x-png,image/gif,image/jpeg" id="imageUpload" />
          </Form.Group>

          <Form.Label style={pictureProcessor}>Processing your picture</Form.Label>
          <div style={{ display: this.state.showProgressBar ? "initial" : "none" }} >
            <ProgressBar animated now={100} />
          </div>
        </Card.Body>
      </Card >
    );
  }
}

export default CUploadPicture;
