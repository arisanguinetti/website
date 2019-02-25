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

require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: moment(process.env.REACT_APP_ARIEL_BIRTHDAY)
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
