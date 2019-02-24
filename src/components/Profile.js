import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { age } = this.props;
    return (
      <section id="profile" className="section">
        <div className="container section-wrapper">
          <div className="section-content">
            <div className="row">
              <div className="col-md-7 match-height">
                <div className="profile-text padding-right-yes">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="section-title">
                        Hello, My Name is Ariel.
                      </h2>

                      <p>
                        Ariel Sanguinetti, {age} years young, born and grew up
                        in Tres Arroyos, Buenos Aires, Argentina. A highly
                        motivated creative developer with more than 10 years of
                        experience.
                      </p>

                      <span className="divider" />

                      <p className="text-grey">
                        Ariel Sanguinetti has been Trusted Translations’ CTO
                        since 2012. He is an experienced Software Engineer with
                        over 10 years of experience in the field of Distributed
                        Information Systems. This includes a range of IT related
                        projects from large websites to proprietary systems that
                        gather data from hundreds of geographically dispersed
                        organizations. He is also respected as a reference in
                        the Internet arena for his early involvement in some of
                        the most important Internet projects targeting the
                        Hispanic community.
                      </p>
                      <p className="text-grey">
                        Through his role as CTO, Mr. Sanguinetti has
                        successfully developed and integrated multilingual
                        software solutions in a vast and heterogeneous set of
                        environments. His extensive experience in managing large
                        websites and distributed information systems is a
                        significant asset when working with multilingual content
                        management systems.
                      </p>
                      <p className="text-grey">
                        Mr. Sanguinetti started working at Trusted as a
                        part-time assistant to our former CTO, being promoted
                        within the company based on merit and his unconditional
                        dedication. He has been attending international
                        conferences representing the company like LocWorld, the
                        TAUS Summit, and also work with top 500 fortune
                        companies like Google and Microsoft.
                      </p>
                      <p className="text-grey">
                        He is currently leading a team of IT engineers devoted
                        to the development of all types of solutions and
                        integrating systems and platforms via API and
                        microservices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-details padding-right-yes">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <h4>Contact Details</h4>

                      <ul className="list-unstyled text-grey">
                        <li>Buenos Aires, Argentina</li>
                        <li>
                          <a href="tel:+5492983418902">+54 9 (2983) 418902</a>
                        </li>
                        <li>
                          <a href="mailto:hello@arielsanguinetti.com.ar">
                            hello@arielsanguinetti.com.ar
                          </a>
                        </li>
                        <li>
                          <a href="https://arielsanguinetti.com.ar">
                            https://arielsanguinetti.com.ar
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6 col-md-7">
                      <a
                        href="/assets/extra/cv-ariel-sanguinetti.pdf"
                        className="btn btn-lg btn-custom"
                      >
                        <i className="icon-File-Download" /> Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 hidden-xs hidden-sm match-height pp-wrapper">
                <div className="profile-picture style-one">
                  <img
                    src="/assets/images/profile-picture-1.jpg"
                    alt="Ariel Sanguinetti"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
