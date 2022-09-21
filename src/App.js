import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Home from './pages/home'
import Footer from './Components/Footer'
import FileUploader from './pages/uploadFile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/post';



function App() {
 const [images, setImages]= useState([]);
 const [search, setSearch] = useState("")
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getPosts());
  }, [dispatch]);
  const data = useSelector((state) => state.posts);
 //useEffect(()=> setImages(data), [])
 const filterData = search==="" ? data : data.filter((value) => value.name.toLowerCase().includes(search.toLowerCase()));

 
  return (
    <Router>
      <div className="App">
        <Header setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home images={filterData}/>}></Route>
          <Route path="uploadfile" element={<FileUploader images={images} setImages={setImages}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  ); 
}

export default App;
