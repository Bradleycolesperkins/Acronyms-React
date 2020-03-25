// FOR REFERENCE
// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
// https://github.com/cornflourblue/react-redux-registration-login-example/tree/master/src

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import { Provider } from 'react-redux';
import { store } from './_helpers/store';

import { history } from './_helpers';
import { alertActions } from './_actions';
import { PrivateRoute } from './_components';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import ListAcronyms from './views/ListAcronyms';
import ViewAcronym from './views/ViewAcronym';
import AddNewAcronym from './views/AddNewAcronym';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }


    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/AcROCKnyms" component={ListAcronyms}/>
                        <Route name="addNewAcronym" path="/Add-New-AcROCKnym" component={AddNewAcronym}/>
                        <Route name="viewAcronym" path="/AcROCKnym/:id" component={ViewAcronym}/>
                        <PrivateRoute path="/Register" component={Register}/>
                        <Route path="/Login" component={Login}/>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
// export { connectedApp as App };
export default connectedApp;
