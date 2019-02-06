import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Work.css';

class Work extends Component {
  render() {
    const {props} = this;
    return (
      <div className="work" ref={props.innerRef}>
        {props.children}
      </div>
    );
  }
}

class FeaturedWork extends Component {
  render() {
    const {props} = this;
    return (
      <section className="featured-work">
        <div className="container primary">
          <h1 className="header">Featured Work</h1>  
        </div>   
        <div className="featured-work-container">
          {props.children}
        </div>
      </section>
    );
  }
}


class FeaturedWorkItem extends Component {
  render() {
    const {props} = this;
    return (
      <Link to={`/project/${props.slug}`} className="work-link">
        <div className="work-link-wrapper">
          <img className="work-link-wrapper__thumb" src={props.image} />
          <h3 className="work-link-wrapper__title">{props.title}</h3>
          <p className="work-link-wrapper__content">{props.content}</p>
        </div>
      </Link>
    );
  }
}


class AdditionalWork extends Component {
  render() {
    const {props} = this;
    return (
        <section className="additional-work">
          <div className="container">
            <h1 className="header secondary">Additional Work</h1>  
          </div>   
          <div className="additional-work-container">
            <ul className="work__list">
              {props.children}
            </ul>
          </div>
        </section>
    );
  }
}

class AdditionalWorkItem extends Component {
  render() {
    const {props} = this;
    return (
      <li className="work__list-item">
        <a className="work__list-item-link no-default-hover" href="#">
          <h2 className="work-title">{props.title}</h2>
          <span className="work-detail work-role">{props.role}</span>
          <span className="work-detail work-spacer"> </span>
          <span className="work-detail work-company">{props.company}</span>
          <span className="work-detail work-date">{props.year}</span>
        </a>
      </li>
    );
  }
}

export { // without default
  Work,
  FeaturedWork,
  FeaturedWorkItem,
  AdditionalWork,
  AdditionalWorkItem,
}
