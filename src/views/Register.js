import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


class Register extends Component {
    constructor(props) {
        super(props);

        console.log('IN');
        console.log(userActions.loggedIn());

        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (

            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <div className="uk-background-default uk-border-rounded uk-box-shadow-small">
                        <div className="uk-container uk-container-xsmall uk-padding-large">
                            <article className="uk-article">
                                <h1 className="uk-article-title">Register</h1>
                                <div className="uk-article-content">
                                    <p className="uk-text-lead uk-text-muted">To register, please enter your name, email
                                        and password.</p>

                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div class="uk-margin-bottom">
                                            <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                                                <label htmlFor="name" className="uk-form-label">Name</label>
                                                <div className="uk-form-controls">
                                                    <input type="text" className="uk-input uk-border-rounded" name="name" value={user.name} onChange={this.handleChange} />
                                                </div>
                                                {submitted && !user.name &&
                                                <div className="help-block">Name is required</div>
                                                }
                                            </div>
                                        </div>
                                        <div class="uk-margin-bottom">
                                            <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                                <label htmlFor="email" className="uk-form-label">Email</label>
                                                <div className="uk-form-controls">
                                                    <input type="text" className="uk-input uk-border-rounded" name="email" value={user.email} onChange={this.handleChange} />
                                                </div>
                                                {submitted && !user.email &&
                                                <div className="help-block">Username is required</div>
                                                }
                                            </div>
                                        </div>
                                        <div class="uk-margin-bottom">
                                            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                                <label htmlFor="password" className="uk-form-label">Password</label>
                                                <div className="uk-form-controls">
                                                    <input type="password" className="uk-input uk-border-rounded" name="password" value={user.password} onChange={this.handleChange} />
                                                </div>
                                                {submitted && !user.password &&
                                                <div className="help-block">Password is required</div>
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="uk-text-center">
                                                <button type="submit"
                                                        className="uk-button uk-button-primary uk-border-rounded">Register
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
        );
    }
}


function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export default connectedRegisterPage;
