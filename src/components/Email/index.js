import React from "react";
import emaillogo from "./email-3-128.png"
import "./style.css"

function Email() {
    return <div>
        <a href="mailto:rythomas2525@gmail.com" title="email"><img src={emaillogo} target="_blank" className="bottomicons email " alt="email" /></a>
    </div>
}





export default Email;
