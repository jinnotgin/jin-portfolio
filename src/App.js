import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "typeface-barlow";
import Nav from "./nav";
import Hero from "./hero";
import {
  Work,
  FeaturedWork,
  FeaturedWorkItem,
  AdditionalWork,
  AdditionalWorkItem,
} from "./work";
import Contact from "./contact";
import {
  Project,
  ProjectLabel,
  ProjectTitle,
  ProjectImage,
  ProjectText,
  ProjectList,
  ProjectLink,
} from "./project";

import thumb_coingossip from "./images/thumb-coingossip.png";
import thumb_smartmirror from "./images/thumb-smartmirror.png";
import thumb_theresistance from "./images/thumb-theresistance.png";
import thumb_alastair from "./images/thumb-alastair.png";

import projectsData from "./projectsData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.sections = {
      work: React.createRef(),
      contact: React.createRef(),
    };

    this.scrollToFunction = this.scrollToFunction.bind(this);
  }

  scrollToFunction = sectionName => {
    this.sections[sectionName].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            render={({ history }) => (
              <Nav scrollToFunction={this.scrollToFunction} history={history} />
            )}
          />

          <Route
            exact
            path="/"
            render={history => (
              <Home
                sections={this.sections}
                history={history}
                scrollToFunction={this.scrollToFunction}
              />
            )}
          />
          <Route
            path="/project"
            render={history => <ProjectContainer history={history} />}
          />
          {/*<Route path="/about" component={About} />*/}

          <Contact innerRef={this.sections.contact} />
        </div>
      </Router>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { history, sections, scrollToFunction } = this.props;

    const loadWithScrollToWork =
      history.location.hash === "#work" && history.location.pathname === "/";
    if (loadWithScrollToWork) scrollToFunction("work");
  }

  render() {
    window.scrollTo(0, 0);
    window.document.title = "Jin | Product Manager, Full Stack Developer";
    const { sections } = this.props;
    return (
      <div>
        <Hero />

        <Work innerRef={sections.work}>
          <FeaturedWork>
            <FeaturedWorkItem
              slug="coingossip"
              image={thumb_coingossip}
              title="CoinGossip"
              content="By utilising machine learning algorithms on social media discussions, this tool provides real-time popularity and sentiment analysis on all cryptocurrencies."
            />
            <FeaturedWorkItem
              slug="smartmirror"
              image={thumb_smartmirror}
              title="Smart Mirror"
              content="As an easily deployable dashboard that is compatible with many Smart Mirror installations, it provides useful information on the weather, news, stock prices and more. "
            />
            <FeaturedWorkItem
              slug="theresistance"
              image={thumb_theresistance}
              title="The Resistance"
              content={
                'This mobile app serves as a digital replacement to the popular card game "The Resistance" (designed by Don Eskridge), eliminating the need for physical game cards.'
              }
            />
            <FeaturedWorkItem
              slug="alastair"
              image={thumb_alastair}
              title="Alastair"
              content={
                "A private home automation platform with its own console server application, hybrid web application, custom linux scripts for IOT devices and realtime sensor alogrithms."
              }
            />
          </FeaturedWork>
          <AdditionalWork>
            <AdditionalWorkItem
              slug="nearly"
              title="Nearly - Weather Kiosk"
              role="A minimalist kiosk app that provides hyper-accurate forecast alerts for specific regions of Singapore, using data from NEA's 2 Hour Nowcast (via Data.gov.sg)."
              company="Personal Project"
              year="2016"
            />
            <AdditionalWorkItem
              slug="relatus"
              title="Relatus - Resource Management"
              role="A bespoke system designed for the client's business operations (vocational rehabilitation services) with reporting and analysis capabilites."
              company="SACS Employment Support Services"
              year="2015"
            />
            <AdditionalWorkItem
              slug="timemoo"
              title="TimeMoo - Chatbot Timezone Conversion"
              role="By processing queries using natural language processing (NLP), users can perform timezone conversion without dealing with timezone complexities."
              company="Personal Project"
              year="2013"
            />
            <AdditionalWorkItem
              slug="jtconceirge"
              title="JT Concierge"
              role="An iOS app that helps users easily obtain quotes for automobile services from Insprop, such as insurance, rentals, limousine and maintenance services."
              company="Insprop Services"
              year="2012"
            />
          </AdditionalWork>
        </Work>
      </div>
    );
  }
}

const ProjectContainer = props => {
  const { history } = props;
  const projectName = history.location.pathname.replace("/project", "");

  let projectArr = projectsData[projectName];

  let leftArrow = {
    text: "Return Home",
    path: "/",
  };
  let rightArrow = {
    text: "Return Home",
    path: "/",
  };

  if (projectArr === undefined) projectArr = [{ type: "error" }];
  else {
    const projectOrder = projectsData.projectOrder;
    const current_index = projectOrder.indexOf(projectName);
    const max_index = projectOrder.length - 1;
    console.log({ projectOrder, current_index });

    if (current_index >= 0 && current_index !== max_index) {
      rightArrow.path = `/project${projectOrder[current_index + 1]}`;
      rightArrow.text = "Next Project";
    }

    if (current_index <= max_index && current_index !== 0) {
      leftArrow.path = `/project${projectOrder[current_index - 1]}`;
      leftArrow.text = "Previous Project";
    }
  }

  console.log(projectArr);
  return (
    <div>
      <Project
        name={projectArr[0].content}
        leftArrow={leftArrow}
        rightArrow={rightArrow}
      >
        {projectArr.map((item, i) => {
          const { type, content } = item;
          if (type === "error")
            return (
              <div>
                <ProjectLabel>404 Procrastination Error</ProjectLabel>
                <ProjectTitle>Yikes! This page does not exist!</ProjectTitle>
                <ProjectText>
                  This is a beta portfolio site, so not all projects have been
                  populated.
                </ProjectText>
                <ProjectText>
                  Please check back at a later date. Thank you!
                </ProjectText>
              </div>
            );
          else if (type === "label")
            return <ProjectLabel>{content}</ProjectLabel>;
          else if (type === "title")
            return <ProjectTitle>{content}</ProjectTitle>;
          else if (type === "image") return <ProjectImage src={content} />;
          else if (type === "text")
            return (
              <ProjectText>
                {content.map(text_item => {
                  if (typeof text_item === "string") return `${text_item} `;
                  else if (typeof text_item === "object") {
                    console.log(text_item);
                    if (
                      text_item.type === "list" &&
                      Array.isArray(text_item.content)
                    )
                      return <ProjectList items={text_item.content} />;
                    else if (text_item.type === "link")
                      return (
                        <ProjectLink href={text_item.href}>
                          {text_item.content}
                        </ProjectLink>
                      );
                  }
                })}
              </ProjectText>
            );
        })}
      </Project>
    </div>
  );
};

export default App;
