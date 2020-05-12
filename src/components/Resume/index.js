import React from "react";
import resumelogo from "./document-2-128.png"
import "./style.css"




function Resume() {
    return <div >
        <a href="images/RyanThomasResume.pdf" download="ryansresume" target="_blank" title="Download Resume"><img src={resumelogo} alt="resumelogo" className="bottomicons resume " /></a>
    </div>
}



export default Resume;
