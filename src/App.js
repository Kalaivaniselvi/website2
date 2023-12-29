import React from "react";
import { BrowserRouter as Router, Route,Routes,  Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import logo from "./images/pic.jpeg"
import Product from "./pages/Product";
import Specification from "./pages/Specification";
import Colourrange from "./pages/Colourrange";
import Contactus from "./pages/Contactus";
function App() { 
  
  return(

      
    <Router>
      <div className="App">
      <img src={logo} alt="logo"/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/specification">Specification</Link>
            </li>
            <li>
              <Link to="/colourrange">Colour range</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/product" element={<Product/>}>
          </Route>
          <Route path="/specification" element={<Specification/>}>
          </Route>
          <Route path="/colourrange" element={<Colourrange/>}>
          </Route>
          <Route path="/contactus" element={<Contactus/>}>
          </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;