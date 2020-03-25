import React from 'react';
import { connect } from 'react-redux';

import {acronymActions, userActions} from "../_actions";
import {Link} from "react-router-dom";


class AddNewAcronym extends React.Component {
    constructor(props) {
        super(props);

        console.log(userActions.loggedIn());

        this.state = {
            acronym: {
                acronym: '',
                expansion: '',
                definition: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { acronym } = this.state;
        this.setState({
            acronym: {
                ...acronym,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { acronym } = this.state;
        if (acronym.acronym && acronym.expansion && acronym.definition) {
            // this.props.saveAcronym(acronym);
        }
    }

    render() {

        const { registering  } = this.props;
        const { acronym, submitted } = this.state;

        return (
            <div className="AddNewAcronym">
                <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <ul className="uk-breadcrumb uk-margin-medium-top-">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/AcROCKnyms">All Acronyms</Link></li>
                            <li><span>Add New</span></li>
                        </ul>

                        <div className="uk-background-default uk-border-rounded uk-box-shadow-small">
                            <div className="uk-container uk-container-xsmall uk-padding-large">
                                <article className="uk-article">
                                    <h1 className="uk-article-title">Create A New AcROCKnym</h1>
                                    <div className="uk-article-content">
                                        <p className="uk-text-lead uk-text-muted">If you can't find an acROCKymn on the site, feel free to add your own! Simply fill out the details below.</p>
                                        <form className="uk-form-stacked uk-margin-medium-top" id="submitForm" onSubmit={this.handleSubmit}>

                                            <div className={'uk-margin-bottom form-group' + (submitted && !acronym.acronym ? ' has-error' : '')}>
                                                <label htmlFor="acronym" className="uk-form-label">Abbreviation:</label>
                                                <div className="uk-form-controls">
                                                    <input type="text" className="uk-input uk-border-rounded" name="acronym" value={acronym.acronym} onChange={this.handleChange} />
                                                </div>
                                                {submitted && !acronym.acronym &&
                                                <div className="help-block">Abbreviation is required</div>
                                                }
                                            </div>

                                            <div className={'uk-margin-bottom form-group' + (submitted && !acronym.expansion ? ' has-error' : '')}>
                                                <label htmlFor="expansion" className="uk-form-label">Full Version:</label>
                                                <div className="uk-form-controls">
                                                    <input type="text" className="uk-input uk-border-rounded" name="expansion" value={acronym.expansion} onChange={this.handleChange} />
                                                </div>
                                                {submitted && !acronym.expansion &&
                                                <div className="help-block">Full Version is required</div>
                                                }
                                            </div>

                                            <div className={'uk-margin-bottom form-group' + (submitted && !acronym.definition ? ' has-error' : '')}>
                                                <label htmlFor="expansion" className="uk-form-label">Description / Explanation / Definition::</label>
                                                <div className="uk-form-controls">
                                                    <textarea id="definition" className="uk-textarea uk-border-rounded"  name="definition" rows="5" minLength="10"
                                                              onChange={this.handleChange}
                                                              value={acronym.definition}/>
                                                </div>
                                                {submitted && !acronym.definition &&
                                                <div className="help-block">Description / Explanation / Definition is required</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <div className="uk-text-center">
                                                    <button type="submit"
                                                            className="uk-button uk-button-primary uk-border-rounded">Save Acronym
                                                    </button>
                                                    {registering &&
                                                    <img alt=""
                                                         src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                    }
                                                    <Link to="/"  className="uk-margin-large-left uk-button uk-button-secondary uk-border-rounded" >Cancel</Link>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    addNewAcronym: acronymActions.addNewAcronym
};

const connectedAddNewAcronym = connect(mapState, actionCreators)(AddNewAcronym);
export default connectedAddNewAcronym;
