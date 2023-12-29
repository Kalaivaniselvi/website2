import React from "react";
import  "./About.css"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsFillSuitcaseLgFill } from "react-icons/bs"
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaThumbsUp } from "react-icons/fa" 
import { FaLongArrowAltRight } from "react-icons/fa";
function About() {
 
    return(<>
    <div className="about">
     <h1>Welcome to SK ENGINEERING</h1>
<p> SK ENGINEERING a Industries is one of the leading and the largest private sector producer of<br/>
 roofing sheets in India. Set up as Hari Om Roofing Industries foundied by chairman Mr H<br/>
  Harish.<br/>

Our range of pre-engineered buildings, roofing, cladding and rainwater systems, made from<br/> 
raw materials of the highest quality in accordance with strict ASTM / JIS / AS and IS standards<br/>
, offers flexibility of design to suit any construction need be it your business, factory, home or<br/>
 office. Our products are made to meet your aesthetic needs as well.<br/>

Technology and innovation have always been the cornerstones of IIL's quest for excellence <br/>
and these state-of-the-art plants facilitate the company's mission to attain and sustain market<br/>
 leadership, through technological and product superiority.<br/>

The company's strengths lie in its integrated process management<br/>
, knowledge management and control systems. And its seamless supply chain management systems further the efficient <br/>
use of raw materials, while its staff of highly skilled engineers, technicians and managers with<br/>
 specialised domain knowledge, ensure the choice of the relevant technology and the ability <br/>
 to produce international quality products at a competitive price.<br/>

While we proudly display the sign in our <br/>
offices, on our trucks and throughout all of our corporate communications, it is important to know that the<br/>
 impact of the sign goes beyond the visual aesthetics. In fact, the sign itself is<br/>
  quite aged, and not fairly impressive, but what is strong about it is what it communicates about our organization.</p>
    </div>
    <h2 id="service">Our Services</h2>
    <div id="icongrid">
      <h1>Always Good Work, More Than Just A Sign</h1>
      <div className="icons">
      <div><IoIosArrowDropdownCircle />
      <h3>OUR PROMISE</h3>
      </div>
      <div><FaLongArrowAltRight /></div>
      <div><BsFillSuitcaseLgFill />
      <h3>OUR LEGACY</h3>
      </div>
      <div><FaLongArrowAltRight /></div>
      <div><HiMiniUserGroup />
      <h3>OUR PRIDE</h3>
      </div>
      <div><FaLongArrowAltRight /></div>
      <div><FaThumbsUp />
      <h3>OUR MOTIVATION</h3>
      </div>
      </div>
    </div>
    <div className="footer2">
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
 export default About