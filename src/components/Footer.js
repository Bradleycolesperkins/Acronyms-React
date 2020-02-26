import React from 'react';

function Footer() {
  return (
    <div className="Footer">
        <div className="uk-section uk-text-center uk-text-muted">
            <div className="uk-container uk-container-small">
                <div>
                    <ul className="uk-subnav uk-flex-center">
                        <li><a href="index-2.html">Home</a></li>
                        <li><a href="changelog.html">Changelog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="uk-margin-medium">
                    <div data-uk-grid className="uk-grid uk-child-width-auto uk-grid-small uk-flex-center">
                        <div className="uk-first-column">
                            <a href="https://twitter.com/" className="uk-icon-link uk-icon"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i></a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/" className="uk-icon-link uk-icon"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/" className="uk-icon-link uk-icon"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i></a>
                        </div>
                        <div>
                            <a href="https://vimeo.com/" className="uk-icon-link uk-icon"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="uk-margin-medium uk-text-small uk-link-muted">Made by the Innovation Team @ ROCK.</div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
