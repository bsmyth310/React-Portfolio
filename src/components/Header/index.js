import React, { Component } from "react";
import { Route, Navigate, HashRouter } from "react-router-dom";
import Navigation from "../Navigation/index.js";
import Portfolio from "../Portfolio/index.js";
import About from "../About/index.js";
import Contact from "../Contact/index.js";
import Resume from "../Resume/index.js";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <div className="content">
                    <Route exact path="/"render={() => <Navigate to="/about" />} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        )
    }
}

export default Header;