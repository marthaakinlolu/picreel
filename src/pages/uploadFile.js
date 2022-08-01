import React from "react";
import { Button, Container } from "@mui/material";


function FileUploader() {
    return(
      <Container className="upload-cont">
        <h2 classname="title">UPLOAD YOUR IMAGE</h2>
        <form className="form">
          <div className="upload-file">
            <input type="file" />
          </div>
          <Button>UPLOAD</Button>
        </form>
      </Container>
    )
  }
  export default FileUploader;