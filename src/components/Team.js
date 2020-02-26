import React from 'react';

function Team() {
  return (
      <div className="Team">
          <div className="uk-section uk-section-muted">
              <div className="uk-container">
                  <h2 className="uk-text-center">Didn't find an answer?</h2>
                  <p className="uk-text-muted uk-text-center uk-text-lead">Our team is just an email away and ready to
                      answer
                      your questions</p>
                  <div className="uk-margin-medium-top uk-flex-center uk-text-center uk-grid-small uk-grid"
                       data-uk-grid>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/n4KewLKFOZw/200x200" alt="Evan Wells"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">Evan Wells</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Support</p>
                          </div>
                      </div>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/d2MSDujJl2g/200x200" alt="John Brown"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">John Brown</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Support</p>
                          </div>
                      </div>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/OjYD2ADfhjU/200x200" alt="Sara Galen"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">Sara Galen</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Lead Developer</p>
                          </div>
                      </div>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/vGqbwex5GFw/200x200" alt="Alex Koch"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">Alex Koch</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Design Engineer</p>
                          </div>
                      </div>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/v6CsrFKOxY4/200x200" alt="Tom Farrell"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">Tom Farrell</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Developer</p>
                          </div>
                      </div>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/8PMvB4VyVXA/200x200" alt="Daniel Shultz"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">Daniel Shultz</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Developer</p>
                          </div>
                      </div>
                      <div>
                          <div className="uk-card">
                              <img className="uk-avatar uk-border-circle"
                                   src="https://source.unsplash.com/5EIW3DDX6dw/200x200" alt="John Brown"/>
                              <h5 className="uk-margin-remove-bottom uk-margin-small-top">John Brown</h5>
                              <p className="uk-article-meta uk-margin-xsmall-top">Support</p>
                          </div>
                      </div>
                  </div>
                  <div className="uk-margin-medium-top uk-text-center"
                       data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
                      <a className="uk-button uk-button-primary uk-border-rounded" href="contact.html">Contact Us</a>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Team;
