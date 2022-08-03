import React, {useState} from "react";
import { Button, Container } from "@mui/material";


function FileUploader() {
  const [selectedFile, setSelectedFile] = useState()
  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};
  const handleSubmission = () => {
    const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
    return(
      <Container className="upload-cont">
        <h2 classname="title">UPLOAD YOUR IMAGE</h2>
        <form className="form">
          <div className="upload-file">
            <input type="file" name="file" onChange={changeHandler}/>
          </div>
          <Button variant="contained" onClick={handleSubmission}>UPLOAD</Button>
        </form>
      </Container>
    )
  }
  export default FileUploader;