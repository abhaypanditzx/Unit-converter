import { useState } from "react";
import Nav from "./components/Nav";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Tools" element={<Tools />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
