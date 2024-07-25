import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from './Pages/ProductDetail';



import './App.css'
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/about" element={<About/>} />
        </Route>
            {/* <Route path="/about" element={< />} /> */}
          {/* <Route path="/about" element= {<About />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
