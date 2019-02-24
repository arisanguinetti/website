import React, { Component } from "react";

class Strengths extends Component {
  render() {
    return (
      <section id="strengths" className="section">
        <div className="container-fluid section-wrapper">
          <div className="section-content">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <h2 className="section-title">My Strengths</h2>

                <p className="section-subtitle">
                  “Sometimes you don’t realize your own strength until you come
                  face to face with your greatest weakness.” – Susan Gale
                </p>

                <span className="divider center" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="column-chart">
                  <div className="legend legend-left hidden-xs">
                    <h3 className="legend-title">ME</h3>
                  </div>

                  <div className="legend legend-right hidden-xs">
                    <div className="item">
                      <h4>Superhero</h4>
                    </div>

                    <div className="item">
                      <h4>Preety Good</h4>
                    </div>

                    <div className="item">
                      <h4>Good</h4>
                    </div>

                    <div className="item">
                      <h4>Newbie</h4>
                    </div>
                  </div>

                  <div className="chart clearfix">
                    <div className="item">
                      <div className="bar">
                        <span className="percent">83%</span>

                        <div className="item-progress" data-percent="83">
                          <span className="title">Creativity</span>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="bar">
                        <span className="percent">92%</span>

                        <div className="item-progress" data-percent="92">
                          <span className="title">Reliable</span>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="bar">
                        <span className="percent">82%</span>

                        <div className="item-progress" data-percent="82">
                          <span className="title">Comunication</span>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="bar">
                        <span className="percent">86%</span>

                        <div className="item-progress" data-percent="86">
                          <span className="title">Leadership</span>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="bar">
                        <span className="percent">81%</span>

                        <div className="item-progress" data-percent="81">
                          <span className="title">Persuasion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Strengths;
