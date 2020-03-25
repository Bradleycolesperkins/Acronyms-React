import React from 'react';
import { connect } from 'react-redux';

import {acronymActions } from "../_actions";
import {Link} from "react-router-dom";


class ViewAcronym extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getAcronym(id)
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.hasOwnProperty('acronyms')){
            if (prevProps.acronyms.hasOwnProperty('items')) {
                if (prevProps.acronyms.items.hasOwnProperty('id')) {
                    if ( parseInt(prevProps.acronyms.items.id) !== parseInt(this.props.match.params.id)) {
                        this.props.getAcronym(this.props.match.params.id);
                    }
                }
            }
        }
    }

    render() {
        const { acronyms } = this.props;
        console.log('IN VIEW ACRONYM', acronyms);
        return (
            <div className="ViewAcronym">
                {acronyms.item &&
                    <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <ul className="uk-breadcrumb uk-margin-medium-top-">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/AcROCKnyms">All</Link></li>
                            <li><span>{acronyms.item.acronym}</span></li>
                        </ul>
                        <div className="uk-background-default uk-border-rounded uk-box-shadow-small">
                            <div className="uk-container uk-container-xsmall uk-padding-large">
                                <article className="uk-article">
                                    <h1 className="uk-article-title">{acronyms.item.acronym}</h1>
                                    <p className="uk-text-lead uk-text-muted">{acronyms.item.expansion}</p>
                                    <div className="uk-article-content">
                                        <p>{acronyms.item.definition}</p>
                                        <div className="uk-article-meta uk-margin uk-flex uk-flex-middle">
                                            <img className="uk-border-circle uk-avatar-small" alt="icon" src={require('../assets/images/unknown_user.png')} />
                                                <div>
                                                    Written by {
                                                        acronyms.item.user &&
                                                        acronyms.item.user.name
                                                    } <time className="uk-margin-small-right">{acronyms.item.created_at}</time><br />
                                                    Updated <time >{acronyms.item.created_at}</time>
                                                </div>
                                        </div>
                                        <div className="share uk-text-center uk-margin-large-top">
                                            <p>Did this Acro<sub>ck</sub>nym answer what you were looking for?</p>
                                            <a href="#" title="Dislike"><span className="uk-icon-button uk-text-primary" data-uk-icon="icon: close; ratio: 1.2"><i className="fa fa-times"></i></span></a>
                                            <a className="uk-margin-small-left"
                                               href="#" title="Like"><span className="uk-icon-button uk-text-primary" data-uk-icon="icon: check; ratio: 1.2"><i className="fa fa-check"></i></span></a>
                                        </div>
                                    </div>
                                    <div className="uk-margin-large-top paginate-post">
                                        <div className="uk-child-width-expand@s uk-grid-large uk-grid">
                                            { acronyms.item.previous &&
                                                <div>
                                                    <h5>{acronyms.item.previous.acronym}</h5>
                                                    <div>
                                                        <Link to={'/AcROCKnym/'+acronyms.item.previous.id } className="uk-remove-underline hvr-back">
                                                            <i className="fa fa-arrow-left"></i>&nbsp;Previous
                                                        </Link>
                                                    </div>
                                                </div>
                                            }
                                            { acronyms.item.next &&
                                            <div className="uk-text-right">
                                                <h5>{acronyms.item.next.acronym}</h5>
                                                <div>
                                                    <Link to={'/AcROCKnym/'+acronyms.item.next.id } className="uk-remove-underline hvr-forward">
                                                        <i className="fa fa-arrow-right"></i>&nbsp;Next
                                                    </Link>
                                                </div>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                }
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
    getAcronym: acronymActions.getAcronym
};

const connectedViewAcronym = connect(mapState, acronymCreators)(ViewAcronym);
export default connectedViewAcronym;
