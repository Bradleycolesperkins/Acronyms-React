import React, { Component } from "react";

class FaqAccordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {
        var { title, children } = this.props;
        const { opened } = this.state;

        return (
            <li>
                <div className="uk-accordion-title uk-box-shadow-hover-small pointer"
                     onClick={this.toggleBox}
                >
                    {title}
                </div>
                {opened && (
                    <div className="uk-article-content uk-accordion-content link-primary">
                        {children}
                    </div>
                )}
            </li>

        );
    }
}

export default FaqAccordion;
