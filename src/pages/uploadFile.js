import React from "react";
import { Button, Container } from "@mui/material";


function FileUploader() {
    return(
      <Container className="upload-cont">
        <form className="form">
          <div className="upload-file">
            <label>UPLOAD YOUR IMAGE</label>
            <input type="file" />
          </div>
          <Button>UPLOAD</Button>
        </form>
      </Container>
    )
  }
  export default FileUploader;