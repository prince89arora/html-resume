import React, { Component } from "react";
import './style.css';

class SectionHeading extends Component {

    render() {
        return(
            <div className="resume_section_heading">
                <h1>{this.props.heading}</h1>
            </div>
        );
    }
}

export default SectionHeading;