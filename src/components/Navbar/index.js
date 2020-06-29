import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {

  componentDidMount(){
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
        <div className="navbar-fixed" id="navbar">
            <nav className="nav-color" role="navigation">
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <a id="logo-container" href="/" className="brand-logo">Robert Mason</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/bio">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <ul id="slide-out" className="sidenav">
              <li><a href="/">Home</a></li>
              <li><div className="divider"></div></li>
              <li><a href="/bio">Bio</a></li>
              <li><div className="divider"></div></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><div className="divider"></div></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            
      </div>
    );
  }
}

export default Navbar;