import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Col from "./components/Col"
import Container from "./components/Container"
import Row from "./components/Row"
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import Projectslide from './components/Projectslide';
import Aboutmetext from './components/Aboutmetext';
import Aboutmeimage from './components/Aboutmeimage';
import Home from "./pages/home"
import Resumepage from "./pages/Resumepage"

function App() {
  return (
    <Router>
      <Overlay />
      <div>
        <Navbar />
        <Container >
          <Route exact path="/20-reactportfolio" component={Home} />
          <Route exact path="/20-reactportfolio/resume" component={Resumepage} />
        </Container>

        <Footer />

      </div>
    </Router >
  )
}

export default App;
