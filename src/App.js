import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import Home from "./pages/home"


function App() {
  return (
    <Router>
      <Overlay />
      <div>
        <Navbar />
        <Container >
          <Route exact path="/20-reactportfolio" component={Home} />
        </Container>
        <Footer />
      </div>
    </Router >
  )
}

export default App;
