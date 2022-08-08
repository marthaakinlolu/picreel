import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Home from './pages/home'
import Footer from './Components/Footer'
import FileUploader from './pages/uploadFile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { data } from './Data'


function App() {
 const [images, setImages]= useState([]);
 useEffect(()=> setImages(data), [])
 
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home images={images}/>}></Route>
          <Route path="uploadfile" element={<FileUploader images={images} setImages={setImages}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
