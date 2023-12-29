import React from "react";
import logo from "../images/pic.jpeg";
import {Link} from "react-router-dom"
function Navbar() {

   return(<div className="navbar">
     <div className="leftside">
        <img src={logo} alt="img"/>
     </div>
     <ul>
     <li>
      <Link to="/Home">HOME</Link>
      </li>
     <li>
     <Link>SERVICES</Link>
      </li>
     <li>
     <Link>CONTACT US</Link>
      </li>
      </ul>
   </div>)
    
}
export default Navbar;