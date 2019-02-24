import React, { Component } from "react";
import moment from "moment";

class Footer extends Component {
  render() {
    const currentYear = moment().year();
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-scroll">
                <a href="#page-top">
                  <i className="icon-Arrow-Up" />
                </a>
              </div>

              <ul className="list-inline social-icons">
                <li>
                  <div className="item">
                    <a
                      href="https://www.facebook.com/arisanguinetti"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </li>

                <li>
                  <div className="item">
                    <a
                      href="https://twitter.com/arisanguinetti"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </li>

                <li>
                  <div className="item">
                    <a
                      href="https://www.linkedin.com/in/arisanguinetti"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="copyright text-center">
                <p className="text-grey">
                  &copy; {currentYear}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
