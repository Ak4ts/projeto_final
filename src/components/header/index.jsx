import React from "react";
import "./style.css"
const Header = () => {
    return(
        <div className="ui secondary menu">
        <a className="item">
            Home
        </a>
        <a className="item">
            Messages
        </a>
        <a className="item active">
            Friends
        </a>
        <div className="right menu">
            <div className="item">
            <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
            </div>
            </div>
            <a className="ui item">
            Logout
            </a>
        </div>
        </div>
    )
}

export default Header;