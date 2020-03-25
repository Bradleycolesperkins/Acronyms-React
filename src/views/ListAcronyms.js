import React from 'react';
import { connect } from 'react-redux';

import {acronymActions} from "../_actions";
import {Link} from "react-router-dom";


class ListAcronyms extends React.Component {
    componentDidMount() {
        this.props.getAllAcronyms();
    }

    render() {
        const { acronyms } = this.props;
        console.log('IN LIST ACRONYM', acronyms);
        return (
            <div className="ListAcronyms">
                <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <ul className="uk-breadcrumb">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li><span>All</span></li>
                        </ul>
                        <div className="uk-grid-small uk-grid" data-uk-grid="">
                            <div className="uk-width-auto uk-text-primary uk-first-column">
                                <span className="uk-margin-xsmall-top uk-icon" data-uk-icon="icon: cog; ratio: 2.6">
                                    <svg width="52" height="52" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="cog">
                                        <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"></circle>
                                        <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="uk-width-expand">
                                <h1 className="uk-article-title uk-margin-remove">All Acro<sub>ck</sub>nyms</h1>
                                <p className="uk-text-lead uk-text-muted uk-margin-small-top">At ROCK acronyms are used
                                    to form words from the initial letters or groups of letters of words in a set phrase
                                    or series of words and pronounced as a separate word. Often used to speed up
                                    references to certain work processes.</p>
                            </div>
                        </div>
                        <div className="uk-margin-medium-top">
                            {acronyms.items &&
                                <div>
                                    {acronyms.items.map((acronym, index) =>
                                        <div key={acronym.id}
                                            className="uk-card uk-card-category uk-card-default uk-card-hover uk-card-body uk-inline uk-border-rounded uk-width-1-1">
                                            <Link to={'/AcROCKnym/'+acronym.id } className="uk-position-cover"></Link>
                                            <h3 className="uk-card-title uk-margin-remove uk-text-primary">{acronym.acronym}</h3>
                                            <p className="uk-margin-small-top">{acronym.expansion}</p>
                                            <div className="uk-article-meta uk-flex uk-flex-middle">
                                                <img className="uk-border-circle uk-avatar-small" alt="icon" src={require('../assets/images/unknown_user.png')} />
                                                <div>
                                                    Written by {acronym.user.name}
                                                    <time className="uk-margin-small-right" dateTime="2019-10-05">{acronym.created_at}</time>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



function mapState(state) {
    const { acronyms,  authentication } = state;
    const { token } = authentication;
    return { token, acronyms };
}


const acronymCreators = {
    getAllAcronyms: acronymActions.getAllAcronyms
};

const connectedListAcronyms = connect(mapState, acronymCreators)(ListAcronyms);
export default connectedListAcronyms;
