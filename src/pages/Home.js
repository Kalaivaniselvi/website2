import React from "react";
import "./Home.css"
import img_1 from "../images/roof.jpg";
import wall from "../images/wallcadding.jpeg"
import zin from "../images/zincalume.jpeg";
import smart from "../images/smartbuilding.jpeg";
import structure from "../images/structuralsolution.jpeg"
import butler from "../images/butlerbuilding.jpeg"
import coated from "../images/colourcoated.jpeg"
import solar from "../images/solarframe.jpeg"
import sheet from "../images/decking sheet.jpeg"
import ventilator from "../images/ventilator.jpeg"
import sheets from "../images/curved.jpeg"
import cad from "../images/wallcd.jpeg"
import bsnl from "../images/bsnl.png"
import mahe from "../images/mahe.png"
import nissan from "../images/nissan.png"
import tata from "../images/tata.png"
import finance from "../images/img1.png"
function Home() {
    return(
    <>
    <div className="roof">
        <img src={img_1} alt="pic" id="roof1"/>
        <p> We manufacturing <br/>
        industrial steel <br/>
         roof top sheet</p>
        <h2>Learn more</h2>
        <h1>OUR SERVICES</h1>
    </div>
    <div className="grid">
     <div><img src={wall} alt="cadding"/>
     <h1> WALL CADDING</h1>
     </div>
     <div><img src={zin} alt="zin"/>
     <h1> ZINCALUME</h1>
     </div>
     <div><img src={smart} alt="smart"/>
     <h1> SMART BUILDING</h1>
     </div>
     <div><img src={structure} alt="building"/>
     <h1>STRUCTURAL SOLUTION</h1>
     </div>
     <div><img src={butler} alt="butler"/>
      <h1>BUTLER BUILDING</h1>
     </div>
     <div><img src={coated} alt="cadding"/>
     <h1>COLOUR COATED SHEET</h1>
     </div>
    </div>
    <h3 id="menu">VIEW ALL SERVICES</h3>
    <p id="about">Hari Om Roofing Industries is one of the leading and the largest private<br/>
     sector producer of roofing sheets in India.</p>
     
    <p id="description">
    <h1>Why Choose Us</h1><br/>
    Hari Om Roofing Industries foundied by chairman Mr H Harish.<br/>
    Our range of pre-engineered buildings, roofing, cladding and rainwater<br/>
    systems, made from raw materials of the highest quality in accordance<br/>
    with strict ASTM / JIS / AS and IS standards, offers flexibility of design to<br/>
    suit any construction need be it your business, factory, home or office.<br/>
    Our products are made to meet your aesthetic needs as well.</p> 
    <h1 id="project">OUR PROJECTS</h1>

    
    <div className="grid_1">
     <div><img src={solar} alt="solar"/>
     <h4> SOALR FRAME</h4>
     </div>
     <div><img src={sheet} alt="sheet"/>
     <h4> GI DECKING SHEET</h4>
     </div>
     <div><img src={ventilator} alt="ventilator"/>
     <h4> ROOF VENTILATOR</h4>
     </div>
     <div><img src={sheets} alt="sheets"/>
     <h4>CURVED ROOFING SHEETS</h4>
     </div>
     <div><img src={cad} alt="cad"/>
      <h4>WALL CLADDING</h4>
     </div>
    </div>
    <h1 id="topic">TESTIMONIALS</h1><br/>
    <div className="footer">
    <div>
    <p>Many thanks for your roofing system which saved my customers at<br/>
     parking.we appreciate your quality concern methods!</p>
     </div>
     <div>
     <p>I am pleased with your dedicated work for building roof for my garage<br/>
     I surely recommend you to my friend who is in plan  to</p>
     </div>
     </div>
     <div id="no">
     <div>1100+</div>
     <div>2000+</div>
     <div>10+</div>
     </div>
     <div id="content">
     <div>Clients</div>
     <div>Project</div>
     <div>Years<br/> Experience</div>
     </div>
     <div id="companies">
     <div ><h1>OUR AWESOME <br/>CILENTS</h1></div>
     <div><img src={finance} alt="muthoot finannce"/></div>
     <div><img src={bsnl} alt="bsnl"/></div>
     <div><img src={mahe} alt="mahindra"/></div>
     <div><img src={nissan} alt="nissan"/></div>
     <div><img src={tata} alt="tata"/></div>
     </div>
     <div className="footer1">
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
 export default Home;