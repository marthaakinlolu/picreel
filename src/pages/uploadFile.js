import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from "@mui/material";


export default function FileUploader (props) {
	const {images, setImages} = props;
	const history = useNavigate();
	const handleSubmit = () => {
		history("/");
	}
    return(
      <Container className="upload-cont">
        <h2 classname="title">UPLOAD YOUR IMAGE</h2>
        <form className="form">
          <div className="upload-file">
            <FileBase type="file"  
					    onDone={({base64}) => {
						  setImages([...images,{ avatar:base64, name:"Martha Tosin", image:base64}])}
					    }
			      />
          </div>
          <Button variant="contained" onClick={handleSubmit}>UPLOAD</Button>
        </form>
      </Container>
    )
  }