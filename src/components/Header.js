import React, {Component} from 'react';
import { Link } from "react-router-dom";

import { userActions } from '../_actions';

import backgroundHeaderImage from './../assets/images/header.jpg';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + backgroundHeaderImage + ")"

};

class Header extends Component {
    constructor(props) {
        super(props);
        console.log('IN');
        console.log(userActions.loggedIn());

        this.state = {
            loggedIn: userActions.loggedIn()
        };

    }

    logOut(){
        userActions.logout();
        // refresh?
    }
    render() {
        const { loggedIn } = this.state;
        return (
          <div className="Header">
              <header
                  className="uk-background-primary uk-background-norepeat uk-background-cover uk-background-center-center uk-light"
                  style={sectionStyle}
              >
                      <nav className="uk-navbar-container">
                          <div className="uk-container">
                              <div data-uk-navbar className="uk-navbar">
                                  <div className="uk-navbar-left">
                                      <Link to="/" className="uk-navbar-item uk-logo uk-visible@m" >ACRO<sub>ck</sub>NYM</Link>
                                  </div>
                                  <div className="uk-navbar-center uk-hidden@m">
                                      <Link to="/" className="uk-navbar-item uk-logo" >ACRO<sub>ck</sub>NYM</Link>
                                  </div>
                                  <div className="uk-navbar-right">
                                      <ul className="uk-navbar-nav uk-visible@m">
                                          {
                                              loggedIn === true &&
                                              <li>
                                                  <div className="uk-navbar-item">
                                                      <Link to="/Add-New-AcROCKnym"  className="uk-button uk-button-small uk-button-primary">Add New</Link>
                                                  </div>
                                              </li>
                                          }
                                          <li className="uk-active">
                                              <Link to="/">Home</Link>
                                          </li>
                                          <li>
                                              <Link to="/AcROCKnyms">All Acro<sub>ck</sub>nyms</Link>
                                          </li>
                                          {
                                              loggedIn === true &&
                                              <li>
                                                  <Link to="/Register">Register</Link>
                                              </li>
                                          }
                                          {
                                              loggedIn === true &&
                                              <li>
                                                  <div className="uk-navbar-item">
                                                      <div onClick={this.logOut}
                                                          className="uk-button uk-button-small uk-button-primary-outline" >Log Out</div>
                                                  </div>
                                              </li>
                                          }
                                          {
                                              loggedIn === false &&
                                              <li>
                                                  <div className="uk-navbar-item">
                                                      <Link to="/Login" className="uk-button uk-button-small uk-button-primary-outline" >Login</Link>
                                                  </div>
                                              </li>
                                          }
                                      </ul>
                                      <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas">
                                          <span className="uk-margin-small-left">Menu</span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </nav>

                  <div className="uk-section uk-position-relative uk-position-z-index" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
                      <div className="uk-container">
                          <h1 className="uk-text-center uk-margin-remove-top">Search For an Acro<sub>ck</sub>nym:</h1>
                          <div className="hero-search uk-margin-medium-top">
                              <form className="uk-search uk-search-default uk-width-1-1" name="search-hero">
                                  <span data-uk-search-icon="ratio: 1.2"></span>
                                  <input id="search-hero" className="uk-search-input uk-form-large uk-border-rounded" type="search"
                                         placeholder="Search here"
                                         autoComplete="off"
                                         data-minchars="1"></input>
                                  <div className="awesomplete">
                                      {/*<ul role="listbox" id="awesomplete_list_1" v-show="isOpen" class="autocomplete-results">*/}
                                      {/*    <li role="option" aria-selected="true" id="awesomplete_list_1_item_0"*/}
                                      {/*    class="autocomplete-result">*/}
                                      {/*        <Link to="/">*/}
                                      {/*            Login*/}
                                      {/*            <span class="uk-text-bold">acronym</span> - expansion*/}
                                      {/*        </Link>*/}
                                      {/*  </li>*/}
                                      {/*</ul>*/}
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
            </header>
          </div>
        );
    }
}

export default Header;
