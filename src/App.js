import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar"
import Linkedin from "./components/Linkedin"
import Col from "./components/Col"
import Container from "./components/Container"
import Row from "./components/Row"
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import Projectslide from './components/Projectslide';
import Aboutmetext from './components/Aboutmetext';
import Aboutmeimage from './components/Aboutmeimage';

function App() {
  return (
    <Router>
      <Overlay />
      <div>
        <Navbar />
        <Container >
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
        </Container>

        <Footer />

      </div>
    </Router >
  )
}

export default App;
