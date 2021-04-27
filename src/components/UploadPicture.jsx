import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Images } from 'react-bootstrap-icons';
import "../App.css";

class CUploadPicture extends Component {
  state = { iconColor: "lightGrey" };
  render() {
    const uploadPictureBoxStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // padding: "100px 0px 100px 0px",
      borderRadius: "15px",
      boxShadow:
        "0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.20)",
    };
    const handleDrop = e => {
      this.setState({ iconColor: "grey" })
      e.preventDefault();
      e.stopPropagation();
    };
    return (
      <Card style={uploadPictureBoxStyle} onDrop={e => handleDrop(e)}>
        <Card.Header>
          Get Started By Uploading Picture Below
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {/* <Images color={this.state.iconColor} size={85} /> */}
            <svg data-v-4e85f282="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" height="31mm" width="25mm"><path data-v-4e85f282="" d="M.787 6.411l10.012 5.222a.437.437 0 0 0 .402 0l10.01-5.222a.434.434 0 0 0 .186-.585.45.45 0 0 0-.186-.187L11.2.417a.441.441 0 0 0-.404 0L.787 5.639a.439.439 0 0 0-.184.588.453.453 0 0 0 .184.184z" fill="#DDDFE1"></path><path data-v-4e85f282="" d="M21.21 9.589l-1.655-.864-7.953 4.148a1.31 1.31 0 0 1-1.202 0L2.444 8.725l-1.657.864a.437.437 0 0 0-.184.583.427.427 0 0 0 .184.187l10.012 5.224a.437.437 0 0 0 .402 0l10.01-5.224a.434.434 0 0 0 .186-.586.444.444 0 0 0-.186-.184z" fill="#EDEFF0"></path></svg>
          </Card.Title>
          <Button variant="primary">Upload Picture</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CUploadPicture;
