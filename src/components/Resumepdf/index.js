
import React from "react";
import "./style.css"
import resume from "./RyanThomasResume.pdf"
import resumeimg from "./Resumeimg.png"

function Resumepdf() {
    return (


        <div>
            <a href={resume} target="_blank" rel="noopener noreferrer" title="linkedin"><img src={resumeimg} alt="resumeimg" className="resumeimg" /></a>
        </div>

    )
}





export default Resumepdf;
