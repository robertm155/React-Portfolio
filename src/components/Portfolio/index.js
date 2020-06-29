import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
        <div>
            <div className="row contact-form" id="portfolio">
                <div className="col s2 m3"></div>
                <div className="col s9 m6 title"><h2>Portfolio</h2></div>
            </div>

            <div className="row">

                <div className="col s2 m3"></div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Leftovers"src="https://robertm155.github.io/Portfolio-Website/assets/images/Leftovers-Preview.png"></img>
                        <span className="card-title" id="project-title">Leftovers</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://jrock312.github.io/leftovers/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Jrock312/leftovers">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Password Generator"src="https://robertm155.github.io/Portfolio-Website/assets/images/Password-Generator-Preview.png"></img>
                        <span className="card-title" id="project-title">Password Generator</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://robertm155.github.io/Password-Generator/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/robertm155/Password-Generator">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Weather App" src="https://robertm155.github.io/Portfolio-Website/assets/images/Weather-App-Preview.png"></img>
                        <span className="card-title" id="project-title">Leftovers</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://robertm155.github.io/Weather-App/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/robertm155/Weather-App">Github Repo</a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col s2 m3"></div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="First Fantasy"src="https://robertm155.github.io/Portfolio-Website/assets/images/fantasy-preview.png"></img>
                        <span className="card-title" id="project-title">First Fantasy: An RPG Game</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="http://rocky-island-60367.herokuapp.com/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/robertm155/project2-th-rjs">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Readme Generator"src="https://robertm155.github.io/Portfolio-Website/assets/images/readme-preview.png"></img>
                        <span className="card-title" id="project-title">ReadME Generator</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a>Node App</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/robertm155/README-Generator">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Employee Directory"src="https://robertm155.github.io/Portfolio-Website/assets/images/employee-directory-preview.png"></img>
                        <span className="card-title" id="project-title">Employee Directory</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a>Node App</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/robertm155/User-Directory">Github Repo</a>
                    </div>
                    </div>
                </div>
            </div>

            

            



      </div>
    );
  }
}

export default Portfolio;