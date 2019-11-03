import React, { Component } from "react";
import PersonalInfo from '../_data/_personl-info';
import SocialLinkList from './social-links/sociallinks';

class Header extends Component {

    state = {
        title: PersonalInfo.title,
        name: PersonalInfo.name,
        phone: PersonalInfo.phone,
        email: PersonalInfo.email
    }

    render() {
        return (
            <header className="resume_header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="resume_header_name text-left">
                            <h2>{this.state.name}</h2>
                            <p>{this.state.title}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="resume_header_contact text-right">
                            <ul>
                                <li>
                                    {this.state.phone.map((item, index) => {
                                        return(
                                            <span>{ index === 0 ? item : ' | '+item }</span>
                                        );
                                    })}
                                </li>
                                <li>
                                    {this.state.email.map((item, index) => {
                                        return(
                                            <span>{ index === 0 ? item : ' | '+item }</span>
                                        );
                                    })}
                                </li>
                            </ul>
                        </div>
                        <SocialLinkList></SocialLinkList>
                    </div>
                </div>
            </div>
        </header>
        );
    }

}

export default Header;