import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Button, Container } from "@mui/material";
import { useDispatch } from 'react-redux';
import{createPost} from '../actions/post'


export default function FileUploader ()   {
	const [image, setImage] = useState({});
	const history = useNavigate();
 const dispatch = useDispatch();
	const handleSubmit = () => {
    dispatch(createPost(image));
		history("/");
	}
    return(
      <Container className="upload-cont">
        <h2 classname="title">UPLOAD YOUR IMAGE</h2>
        <form className="form">
          <div className="upload-file">
            <FileBase type="file"  
					    onDone={({base64}) => {
               setImage({ avatar:base64, name:"Martha Tosin", image:base64})}
					    }
			      />
          </div>
          <Button variant="contained" onClick={handleSubmit}>UPLOAD</Button>
        </form>
      </Container>
    )
  }