import React from "react";
import resumelogo from "./document-2-128.png"
import "./style.css"
import resume from "./RyanThomasResume.pdf"




function Resume() {
    return <div >
        <a href={resume} download="ryansresume.pdf" target="_blank" title="Download Resume"><img src={resumelogo} alt="resumelogo" className="bottomicons resume " /></a>
    </div>
}



export default Resume;
