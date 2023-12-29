import React from "react"
import "./colour.css"
import sheet from "../images/ruffing.jpeg"
import colours from "../images/sheet1.jpeg"
function Colourrange() {

    return(<>
    <div className="colour">
    <h1 id="topic">OUR MANUFACTURING SHEETS</h1>
     <img src={sheet} alt="sheet"/>
    </div>
    <div id="range">
     <img src={colours} alt="colours"/>
    </div>
    <div className="footer4">
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
    </>
    )
     
}
 export default Colourrange