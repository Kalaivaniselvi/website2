import React from "react"
import "./contactus.css"
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdMessage } from "react-icons/md";
function Contactus() {

    return(
    <>
    <h1 id="contact"> Contactus</h1>
    <div className="contact1">
      <div><input type="text" placeholder="Enter name"/></div>
      <div><input type="text" placeholder="Enter Email"/></div>
      <div><input type="text" placeholder="Enter Subject"/></div>
      <div><input type="text" placeholder="Enter Phone"/></div>
      <div><textarea placeholder="message" rows="10" cols="100"/></div>
    </div>
    <h1 id="send">Send now</h1>
    <div id="location">
    <div><MdLocationOn id="icon1"/>
    <p>No. 90/2, Adhavan Industrial Estate,<br/>
     Athipalayam Road, (Opp) CRI Pumps,<br/>
      Chinnavedampatti, Ganapathy Post,<br/>
       Coimbatore - 641 006, India.</p>
    </div>
    <div><FaMobileAlt id="icon1"/>
    <p>+91 8754040701<br/>
+91 8754040703<br/>
+91 8754040708<br/>
+91 9442612123</p>
    </div>
    <div><MdOutlineWifiCalling3 id="icon1"/>
    <p>+91 422-4274204</p></div>
    <div><MdMessage id="icon1"/>
<p>info@hrionline.in<br/>
contact@hrionline.in<br/>
enquiry@hariomroofing.com<br/>
sales@hariomroofing.com</p></div>
    </div>
    <div className="footer3">
     <div><h3>Unit I</h3> 
     <p>90/1 Adhavan Industrial Estate,<br/>
      Athipalayam Road, opp CRI pump,<br/>
      Chinnavedampatti post, Ganapathy,<br/>
      Coimbatore 641006 (TN)</p>
     </div>
     <div><h3>Unit II</h3>
     <p>Head Office<br/>
     90/2 Adhavan Industrial Estate,<br/>
     Athipalayam Road, opp CRI pump,<br/>
     Chinnavedampatti post, Ganapathy,<br/>
     Coimbatore 641006 (TN)</p>
     </div>
     <div><h3>Unit III</h3>
    <p>81/1 Adhavan Industrial Estate,<br/>
      Athipalayam Road, opp CRI pump,<br/>
     Chinnavedampatti post, Ganapathy,<br/>
      Coimbatore 641006 (TN)</p>
     </div>
     <div><h3>Unit IV</h3>
     <p>4/147 Senthampalayam,<br/>
      Masagoundenchettipalayam Post,<br/>
      Coimbatore 641107 (TN)</p></div>
     </div>
    </>)
     
}
 export default Contactus