import React from 'react';
import { connect } from 'react-redux';


export class ListAcronym extends React.Component {
    render() {
        return (
            <div className="ListAcronym">
                <h1>Hi</h1>
            </div>
        );
    }
}

function mapState(state) {
    const { authentication } = state;
    const { token } = authentication;
    return { token };
}

const connectedListAcronym = connect(mapState)(ListAcronym);
export default connectedListAcronym;
