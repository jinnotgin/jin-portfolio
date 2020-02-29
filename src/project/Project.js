import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Project.css';

let images = {};
function importAll (r) {
  r.keys().forEach(key => {
    const key_newName = key.replace("./", "").split(".")[0];
    const value = r(key);
    images[key_newName] = value;

    // preload (todo: lazy load)
    const img = new Image();
    img.src = value;
  });
}
importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Project extends Component {
  render() {
    const {props} = this;
    window.scrollTo(0,0);
    window.document.title = `${props.name} | Jin`;

    return (
      <section className="project">
        {props.children}

        <div className="project__links">
          <Link to={props.leftArrow.path} className="links__arrow left">
            <span className="links__text">{props.leftArrow.text}</span>
          </Link>
          <Link to={props.rightArrow.path} className="links__arrow right">
            <span className="links__text">{props.rightArrow.text}</span>
          </Link>
        </div>
      </section>
    );
  }
}

class ProjectLabel extends Component {
  render() {
    const {props} = this;
    return (
      <div className="project-container">
        <h3 className="project__label">
          {props.children}
        </h3>  
      </div>   
    );
  }
}


class ProjectTitle extends Component {
  render() {
    const {props} = this;
    return (
      <div className="project-container">
        <h1 className="project__title header">
          {props.children}
        </h1>  
      </div>  
    );
  }
}


class ProjectImage extends Component {
  render() {
    const {props} = this;

    return (
      <div className="container">
        {/* <img className="project__image" src={props.src} alt={props.alt} /> */}
        <img className="project__image" src={images[props.src]} alt={props.alt}/>
      </div>  
    );
  }
}

class ProjectText extends Component {
  render() {
    const {props} = this;
    return (
      <div className="project-container">
        <div className="project__text">
          {props.children}
        </div>  
      </div>  
    );
  }
}

class ProjectList extends Component {
  render() {
    const {props} = this;
    return (
      <ul className="project__list">
      {
        props.items.map((item, i) => {
          return (
            <li key={i} className="list__item">{item}</li>
          )
        })
      }
      </ul>  
    );
  }
}

class ProjectLink extends Component {
  render() {
    const {props} = this;
    return (
      <span>
        <a className="inverse project__link" href={props.href} target="_blank">
          {props.children}
        </a>&nbsp;
      </span>

    );
  }
}

export { // without default
  Project,
  ProjectLabel,
  ProjectTitle,
  ProjectImage,
  ProjectText,
  ProjectList,
  ProjectLink,
}
