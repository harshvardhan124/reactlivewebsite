import React from "react";
import Home from "./Home"
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="*" element={<Home />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/service" element={<Service />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/contact" element={<Contact />}/>     
    </Routes>
    
    </>
  );
};

export default App;
