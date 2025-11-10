import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar"; // we'll create this next
import Footer from "./Components/Footer";
import ImageSlider from './Components/ImageSlider';

function App() {
  return (
    <>
      <Navbar /> {/* top menu */}
      <ImageSlider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
