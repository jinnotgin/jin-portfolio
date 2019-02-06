import React, { Component } from 'react';
import './Project.css';

let images = {};
function importAll (r) {
  r.keys().forEach(key => {
    const keyName = key.replace('./', '').split('.')[0];
    images[keyName] = r(key);
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
    console.log(props.src);
    return (
      <div className="container">
        {/* <img className="project__image" src={props.src} alt={props.alt} /> */}
        <img className="project__image" src={images['coingossip-main']} alt={props.alt}/>
      </div>  
    );
  }
}

class ProjectText extends Component {
  render() {
    const {props} = this;
    return (
      <div className="project-container">
        <p className="project__text">
          {props.children}
        </p>  
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
            <li className="list__item">{item}</li>
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
