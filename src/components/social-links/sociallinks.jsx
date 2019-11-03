import React, { Component } from "react";
import SocialLinks from '../../_data/_social-links';
import './style.css';

class SocialLinkList extends Component {

    state = {
        links : []
    };

    componentDidMount() {
        this.prepareLinkList();
    }

    prepareLinkList = () => {
        let array = [];
        SocialLinks.forEach((item, index) => { 
            let item_class = "social_link_item";
            if ( index > 0 ) {
                item_class = item_class + " with_saperator_prefix";
            }
            array.push( 
                <div className={item_class} >
                        <a href={item.link} data-icon={item.icon}>
                            <span>{item.text}</span>
                        </a> 
                    </div>
            );
        });
        this.setState({links: array});
    }

    render() {
        console.log(this.state.links);
        return (
            <div className="resume_social text-right">
                {this.state.links}
            </div>
        );
    }
}

export default SocialLinkList;