import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Col from "../Col";



function Navbar() {
    return (
        <nav className="navbar navbar-expand-xs navbar-dark background">
            <Col size="xs-4"></Col>
            <Col size="xs-4" >
                <Link className="navbar-brand rlt d-flex justify-content-center" to="/">
                    RLT
      </Link>
            </Col>
            <Col size="xs-4"></Col>

        </nav >
    );
};

export default Navbar;