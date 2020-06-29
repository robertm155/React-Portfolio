import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
        <div >
            <div className="row contact-form" id="contact-form">
                <div className="col s2 m3"></div>
                <div className="col s9 m6 title"><h2>Contact</h2></div>
            </div>
            
            <div className="row contact-form-text">
        <div className="col s2 m3"></div>
        <div className="col s9 m6">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="first_name" type="text" className="validate"></input>
                  <label for="first_name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate"></input>
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" type="text" className="materialize-textarea"></textarea>
                  <label for="textarea1">Message</label>
                </div>
              </div>
              <a className="waves-effect waves-light btn submit-button">Submit</a>
            </form>
          </div>
        </div>
      </div>


      </div>
    );
  }
}

export default ContactForm;