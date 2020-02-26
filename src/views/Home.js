import React from 'react';
import { connect } from 'react-redux';

import Categories from '../components/Categories';
import Faq from '../components/Faq';
import Team from '../components/Team';

class Home extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className="Home">
                {
                    user &&
                    <h1>Hi {user}!</h1>
                }
                <Categories/>
                <Faq/>
                <Team/>
            </div>
        );
    }
}

function mapState(state) {
    const { authentication } = state;
    const { token } = authentication;
    return { token };
}

const connectedHome = connect(mapState)(Home);
export default connectedHome;
