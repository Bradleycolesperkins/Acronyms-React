import React, { Component } from "react";

class FaqAccordionContent extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        var { content } = this.props;
        return (
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        );
    }
}

export default FaqAccordionContent;
