import React, { Component } from "react";
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Profile,
  Strengths
} from "./components";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: moment("1986-06-10")
    };
  }
  render() {
    const age = moment().diff(this.state.birthdate, "years");
    return (
      <React.Fragment>
        <Hero age={age} />
        <Navbar />
        <Profile age={age} />
        <Strengths />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
