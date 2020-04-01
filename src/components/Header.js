import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {acronymActions, userActions} from '../_actions';

import backgroundHeaderImage from './../assets/images/header.jpg';
import {connect} from "react-redux";
// import Login from "../views/Login";

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + backgroundHeaderImage + ")"

};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: userActions.loggedIn(),
        };
        console.log(props);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        console.log('CHANGE', e);
        // If the search bar isn't empty
        this.props.searchAcronyms(e.target.value);
    }

    logOut(){
        userActions.logout();
        window.location.href = "/";
    }
    render() {
        const { loggedIn } = this.state;
        const { search } = this.props;
        console.log('IN RENDER:', this.state, this.props)
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
                                         data-minchars="1"
                                         onChange={this.handleChange}
                                  ></input>
                                  <div className="awesomplete">
                                      {search &&
                                          <ul role="listbox" id="awesomplete_list_1" className="autocomplete-results">
                                              {search.hasOwnProperty('items') &&
                                                  search.items.map((acronym, index) =>
                                                  <li role="option" aria-selected="true" id="awesomplete_list_1_item_0"
                                                      className="autocomplete-result">
                                                      <Link to={'/AcROCKnym/'+acronym.id } className="uk-link uk-link-hover2">
                                                          <span className="uk-text-bold">{acronym.acronym}</span> - {acronym.expansion}
                                                      </Link>
                                                  </li>
                                              )}
                                          </ul>
                                      }
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

function mapState(state) {
    const { search, acronyms,  authentication } = state;
    const { token } = authentication;
    return { token, search, acronyms };
}


const acronymSearchCreators = {
    searchAcronyms: acronymActions.searchAcronyms
};

const connectedHeader = connect(mapState, acronymSearchCreators)(Header);
export default connectedHeader;
