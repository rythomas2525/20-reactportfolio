import React from "react";
import "./style.css"
import me from "./images/IMG_20191017_112234.jpg"





function Aboutmeimage() {
    return (

        <img className="img-thumbnail rounded-circle bg-white mt-4 profileimage" alt="profilepicture" src={me} />

    )

};

export default Aboutmeimage;