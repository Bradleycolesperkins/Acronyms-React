import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';


class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (

            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <div className="uk-background-default uk-border-rounded uk-box-shadow-small">
                        <div className="uk-container uk-container-xsmall uk-padding-large">

                            <article className="uk-article">
                                <h1 className="uk-article-title">Login</h1>
                                <div className="uk-article-content">
                                    <p className="uk-text-lead uk-text-muted">To publish to ACROckNYM, simply login with
                                        the form below.</p>

                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className="form-group-collection">
                                            <div className="uk-margin-bottom">
                                                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                                    <label className="uk-form-label" htmlFor="email">Email</label>
                                                    <input type="text" className="uk-input uk-border-rounded" name="email" value={email} onChange={this.handleChange} />
                                                    {submitted && !email &&
                                                    <div className="help-block">Email Address is required</div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="uk-margin-bottom">
                                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                                    <label className="uk-form-label" htmlFor="password">Password</label>
                                                    <input type="password" className="uk-input uk-border-rounded" name="password" value={password} onChange={this.handleChange} />
                                                    {submitted && !password &&
                                                    <div className="help-block">Password is required</div>
                                                    }
                                                </div>
                                            </div>

                                            <div className="uk-text-center">
                                                <div className="form-group">

                                                    <button className="uk-button uk-button-primary uk-border-rounded" type="submit">Login</button>
                                                    {loggingIn &&
                                                    <img alt=""
                                                         src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                    }
                                                    {/*<Link to="/register" className="uk-button uk-button-secondary uk-border-rounded" >Register</Link>*/}

                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export default connectedLogin;
