import React, { Component } from "react";
import SectionHeading from '../../section-heading/sestionHeading'
import ClassNames from '../../../classnames';
import ProfileInfo from '../../../_data/_profile';

class Profile extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={ClassNames.section.container}>
                            <SectionHeading heading="Profile"></SectionHeading>
                            <p>{ProfileInfo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;