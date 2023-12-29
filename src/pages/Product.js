import React from "react"
import "./product.css"
import img_1 from "../images/img21.jpg";
import img_2 from "../images/img22.jpg";
import img_3 from "../images/img23.jpg";
import img_4 from "../images/img24.jpg";
import img_5 from "../images/img25.jpg";
import img_6 from "../images/img26.jpg";
import img_7 from "../images/img27.jpg";
import img_8 from "../images/img28.jpg";
import img_9 from "../images/img29.jpg";

function Product() {

    return(<>

      <div id="head3">
        <div>
     <img src={img_1} alt="img1"/>
     <h2>COMPACT MULTIWALL</h2>
    </div>
    <div>
     <img src={img_2} alt="img1"/>
     <h2>POLYCARONNATE SHEETS</h2>
    </div>
    <div>
     <img src={img_3} alt="img1"/>
     <h2>MODERN ROOF TILE</h2>
    </div>
    <div>
     <img src={img_4} alt="img1"/>
     <h2>MANGALORE TILE SHEETS</h2>
    </div>
    <div>
     <img src={img_5} alt="img1"/>
     <h2>HIGH RIB PROFILE SHEETS</h2>
    </div>
    <div>
     <img src={img_6} alt="img1"/>
     <h2>SK EMBOSSED ROOFING SHEETS</h2>
    </div>
    <div>
     <img src={img_7} alt="img1"/>
     <h2>SK DECKING SHEETS</h2>
    </div>
    <div>
     <img src={img_8} alt="img1"/>
     <h2>SK STEEL ROOFING SHEETS</h2>
    </div>
    <div>
     <img src={img_9} alt="img1"/>
     <h2>SK POLYCARBONNATE SHEETS</h2>
    </div>
    </div>
    <div className="footer6">
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
 export default Product