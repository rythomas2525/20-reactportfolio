import React from "react";
import Col from "../components/Col"
import Row from "../components/Row"
import Projectslide from '../components/Projectslide';
import Aboutmetext from '../components/Aboutmetext';
import Aboutmeimage from '../components/Aboutmeimage';








function Home() {


    return (
        <div>
            <Row>
                <Col size="md-6">
                    <Projectslide />
                </Col>

                <Col size="md-6">
                    <Row>
                        <Col size="md-7">
                            <Aboutmeimage />
                        </Col>
                        <Col size="md-5">
                            <Aboutmetext />

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    )


}

export default Home;