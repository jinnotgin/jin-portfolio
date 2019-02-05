import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="contact" ref={this.props.innerRef}>
        <div className="container">
          <h1 className="contact__title header">
            Looking to start a journey? <a className="inverse" href="mailto:contact@linjin.me">Let's talk.</a>
          </h1>
        </div>

        <div className="container">
          <ul className="social-list">
            <a className="social-list__item" href="https://github.com/jinnotgin" target="_blank">
              Github
            </a>
            <a className="social-list__item" href="https://www.linkedin.com/in/jin093/" target="_blank">
              LinkedIn
            </a>
            <a className="social-list__item" href="https://www.facebook.com/linjin" target="_blank">
              Facebook
            </a>
            <a className="social-list__item" href="https://instagram.com/linjin" target="_blank">
              Instagram
            </a>
            <a className="social-list__item" href="mailto:contact@linjin.me">
              Email
            </a>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
