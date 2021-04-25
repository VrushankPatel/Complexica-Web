import { Component } from "react";
import CUploadPicture from "./cUploadPicture";
import animGif from "../assets/gifs/colorized.gif";
class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-8"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px 0px 100px 0px",
            }}
          >
            <div
              className="col"
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
              <img
                src={animGif}
                alt="Colorize your black and white images."
                width="700"
              />
            </div>
          </div>
          <div
            className="col-lg-4 pl-lg-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
