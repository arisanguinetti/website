import React, { Component } from "react";
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Profile,
  Strengths
} from "./components";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Navbar />
        <Profile />
        <Strengths />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
