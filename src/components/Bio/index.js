import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
        <div>
            <div className="row" id="bio">
                <div className="col s2 m3"></div>
                <div className="col s9 m6 title"><h2>Bio</h2></div>
            </div>
            <div className="row bio">
                <div className="col s2 m3"></div>
                <div className="col s9 m6">
                Hello and welcome to my portfolio website! I am a legislative and election consultant with
                more than five years experience work in both the private and public sectors. After graduating with a degree in political
                science in 2014, I worked for the California State Assembly for three elected members in both their district offices and at the
                Capitol Building in Sacramento. Since 2017, I have worked as an independent legislative consultant for organizations
                seeking expertise on introducting and moving legislation through the California Legislature. My consulting work has also
                involved providing strategy and experience to prospective candidates seeking local and statewide office in California,
                Alabama, and Nevada and conducting targeted focus groups for candidates and organizations in the leadup to the 2020 Iowa
                Caucases and abroad in the runup to legislative elections in Israel, South Africa, and the United Kingdom. I am
                presently learning to become a full stack programmer with the intention of shifting into the realm on conducting
                independent polling operations and becoming a more data-centric political consultant.
                </div>
                <div className="col s1"></div>
        </div>
      </div>
    );
  }
}

export default Bio;