import { Component } from "react";
import CUploadPicture from "./cUploadPicture";

class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-6"
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // padding: "100px 0px 100px 0px",
              border: "1px solid black",
            }}
          ></div>
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "100px 0px 100px 0px",
              // border: "1px solid black",
            }}
          >
            <CUploadPicture />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
