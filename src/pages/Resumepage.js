import React from "react";
import Col from "../components/Col"
import Row from "../components/Row"
import Projectslide from '../components/Projectslide';
import Aboutmetext from '../components/Aboutmetext';
import Aboutmeimage from '../components/Aboutmeimage';
import Resumepdf from "../components/Resumepdf";








function Resumepage() {


    return (


        <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
                <Resumepdf />
            </Col>
            <Col size="md-3"></Col>
        </Row>

    )


}

export default Resumepage;