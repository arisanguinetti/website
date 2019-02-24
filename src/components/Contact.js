import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section">
        <div className="container section-wrapper">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="section-title">Contact Me</h2>

                <p className="section-subtitle">
                  Have a project you'd like to discuss?
                </p>

                <span className="divider center" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="contact-details text-center">
                  <div className="speech-bubble">
                    <i className="icon-Speach-Bubble11" />

                    <h4 className="text-grey">
                      Say
                      <br />
                      Hello
                    </h4>
                  </div>

                  <h2>
                    Ariel <strong>Sanguinetti</strong>
                  </h2>

                  <h4 className="text-grey">
                    <a href="mailto:hello@arielsanguinetti.com.ar">
                      hello@arielsanguinetti.com.ar
                    </a>
                  </h4>

                  <span className="divider center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
