import React, { Component } from "react";

class Header extends Component {

    state = {
        title: "Full Stack Engineer",
        name: "Prince Arora",
        phone: ["+91 8745031662"],
        email: ["prnc.arora0@gmail.com", "aroraprince151@gmail.com"] 
    }

    render() {
        return (
            <header className="resume_header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="resume_header_name">
                            <h2>{this.state.name}</h2>
                            <p>{this.state.title}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="resume_header_contact">
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
                    </div>
                </div>
            </div>
        </header>
        );
    }

}

export default Header;