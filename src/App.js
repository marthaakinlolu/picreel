import React from 'react'
import Header from './Components/Header'
import Home from './pages/home'
import Footer from './Components/Footer'
import FileUploader from './pages/uploadFile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="uploadfile" element={<FileUploader />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
