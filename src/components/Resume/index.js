import React from "react";
import resumelogo from "./document-2-128.png"
import "./style.css"
import { Link } from "react-router-dom";

function Resume() {
    return <div >
        <Link to="/20-reactportfolio/resume"   ><img src={resumelogo} className="bottomicons resume " /></Link>
    </div>
}


// function Resume() {
//     return <div >
//         <a href="images/RyanThomasResume.pdf" download="ryansresume" target="_blank" title="Download Resume"><img src={resumelogo} className="bottomicons resume " /></a>
//     </div>
// }



export default Resume;
