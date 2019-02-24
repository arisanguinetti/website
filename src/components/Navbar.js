import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        id="navigation"
        className="navbar navbar-fixed-top center-menu"
        role="navigation"
      >
        <div className="container navbar-container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".berg-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <a className="navbar-brand visible-xs visible-sm" href="#page-top">
              Ari Sanguinetti
            </a>
          </div>

          <div className="navbar-collapse collapse berg-collapse">
            <ul className="nav navbar-nav">
              <li className="page-scroll">
                <a href="#home">Home</a>
              </li>

              <li className="page-scroll">
                <a href="#profile">Profile</a>
              </li>

              <li className="page-scroll">
                <a href="#strengths">Strengths</a>
              </li>

              <li className="page-scroll">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
