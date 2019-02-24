import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <header id="home" className="hero parallax-yes">
        <div id="parallax-1" className="parallax">
          <div
            className="bcg skrollable skrollable-between"
            data-anchor-target="#parallax-1"
            data-center="background-position: 50% 0px;"
            data-top-bottom="background-position: 50% -100px;"
            data-bottom-top="background-position: 50% 100px;"
          >
            <div className="hero-body">
              <div className="hero-text text-center">
                <h1>
                  I'm Ari Sanguinetti <span className="blinker" />
                </h1>

                <h1 className="small">Software Ninjaneer</h1>

                <p>32 years young, techy and nerd, music addict.</p>

                <div className="page-scroll">
                  <a href="#profile" className="btn btn-lg btn-custom">
                    Know Me Better
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;
