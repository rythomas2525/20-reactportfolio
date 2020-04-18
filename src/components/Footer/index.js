import React from "react";
import "./style.css"
import Resume from "../Resume";
import Linkedin from "../Linkedin";
import Col from "../Col";
import Github from "../Github";
import Email from "../Email";




function Footer() {
    return (
        <footer className="navbar navbar-expand-lg navbar-dark ">

            <Col size="md-4">
            </Col>


            <Col size="md-1">
                <Linkedin />

            </Col>
            <Col size="md-1">
                <Github />
            </Col>
            <Col size="md-1">
                <Resume />
            </Col>

            <Col size="md-1">
                <Email />
            </Col>

            <Col size="md-4">
            </Col>

        </footer >
    );
};

export default Footer;