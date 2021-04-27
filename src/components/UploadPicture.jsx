import { Component } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

class CUploadPicture extends Component {
  render() {
    const uploadPictureBoxStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "100px 0px 100px 0px",
      borderRadius: "15px",
      boxShadow:
        "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20)",
    };
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div style={uploadPictureBoxStyle} className="col-lg-10">
            <Button
              style={{
                padding: "15px",
              }}
            >
              Upload Picture
            </Button>
          </div>
        </div>
      </div >
    );
  }
}

export default CUploadPicture;
