//Clickable Nav Titles to take you to the different sections
import React from "react";

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact"];
    return (
        <div className="tabs is-centered">
            <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                    <li className={props.currentPage === tab ? "nav-item is-active" : "nav-item"}
                    ke={tab}
                >
                    <a href={"#" + tab.toLowerCase()}
                    onClick={() => props.handlePageChange(tab)}
                    className={props.currentPage === tab ? "nav-link active" : "nav-link"} >
                        {tab}
                    </a>
                </li>
              ))}
            </ul>
        </div>
    );        
}

export default Navigation;