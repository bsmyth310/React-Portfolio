import React from "react";
import { Navbar } from "react-bootstrap";
import {Navlink} from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <Navbar expand="lg" bg="dark" sticky="top">
                <Navlink className="nav-link" to="/">
                    <div class="text-light">
                        <h4 class="nav-title-font">Benjamin Smyth</h4>
                    </div>
                </Navlink>
                <ul class="navbar-nav ml-auto navitem-indent">
                    <li class="nav-item">
                        <Navlink to="/about">
                            <div class="nav-font text-light">About Me</div>
                        </Navlink>
                    </li>
                    <li class="nav-item">
                        <Navlink to="/contact">
                            <div class="nav-font text-light">Contact Me</div>
                        </Navlink>
                    </li>
                    <li class="nav-item">
                        <Navlink to="/portfolio">
                            <div class="nav-font text-light">Portfolio</div>
                        </Navlink>
                    </li>
                    <li class="nav-item">
                        <Navlink to="/resume">
                            <div class="nav-font text-light">Resume</div>
                        </Navlink>
                    </li>
                </ul>
            </Navbar>
        </div>
    )
}

export default Navigation