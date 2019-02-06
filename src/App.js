import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "typeface-barlow";
import Nav from './nav';
import Hero from './hero';
import {Work, FeaturedWork, FeaturedWorkItem, AdditionalWork, AdditionalWorkItem,} from './work';
import Contact from './contact';
import {Project, ProjectLabel, ProjectTitle, ProjectImage, ProjectText, ProjectList, ProjectLink,} from './project';

import thumb_coingossip from './images/thumb-coingossip.png';
import thumb_smartmirror from './images/thumb-smartmirror.png';

import coingossip_main from './images/thumb-coingossip.png';

import './App.css';

const projectsData = {
  '/coingossip': [
    { type: 'name', content: 'CoinGossip'},
    { type: 'label', content: 'CoinGossip'},
    { type: 'title', content: 'Making it easy to track social media discussions and news about crytocurrencies.'},
    { type: 'image', content: 'coingossip-main' },
    { type: 'label', content: 'CoinGossip Goals'},
    { type: 'text', content: [
      "During the cryptocurrency hype in 2018, there were a large amount of online discussions and speculations across multiple social media platforms. To aid in alleviating the mental load of processing such data, I built this tool with the following goals:",
      { type: 'list', content: [
        'Know what cyptocurrencies are currently trending in real-time',
        'Have a list of news articles or disucsssion threads to provide context of trending cryptocurrencies',
        'Determine the overall sentiment of the trending cryptocurrency, without having to read through the news or discussions manually',
        'See the price actions in context of the trends and sentiment',
      ]},
      { type: 'link', content: 'Visit the site.', href: 'https://coingossip.io'},
    ]},
  ],
}


class App extends Component {
  constructor(props) {
    super(props)
    this.sections = {
      work: React.createRef(),
      contact: React.createRef(),
    }

    this.scrollToFunction = this.scrollToFunction.bind(this);
  }

  scrollToFunction = (sectionName) => {
    this.sections[sectionName].current.scrollIntoView({behavior: 'smooth', block: 'start',});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route render={({history}) => (
           <Nav scrollToFunction={this.scrollToFunction} history={history}/>
          )} />

          <Route exact path="/"  render={(history)=><Home sections={this.sections} history={history} scrollToFunction={this.scrollToFunction}/>} />
          <Route path="/project"  render={(history)=><ProjectContainer history={history} />} />
          {/*<Route path="/about" component={About} />*/}

          <Contact innerRef={this.sections.contact}/>
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
    const {history, sections, scrollToFunction} = this.props;
    
    const loadWithScrollToWork = (history.location.hash === '#work' && history.location.pathname === '/');
    if (loadWithScrollToWork) scrollToFunction('work');
  }

  render() {
    window.scrollTo(0,0);
    window.document.title = 'Jin | Product Manager, UX Engineer, Developer';
    const {sections} = this.props;
    return(
      <div>
        <Hero />

        <Work innerRef={sections.work}>
          <FeaturedWork>
            <FeaturedWorkItem 
              slug="coingossip"
              image={thumb_coingossip} 
              title="CoinGossip"
              content="By tracking social media discussions related to cryptocurrencies, this tool applies machine learning algorithms to provide sentiment analysis."
            />
            <FeaturedWorkItem 
              slug="smartmirror"
              image={thumb_smartmirror} 
              title="Smart Mirror"
              content="This web app serves as the software layer for smart mirror installations, and provides useful information such as weather, news and stock prices. "
            />
          </FeaturedWork>
          <AdditionalWork>
            <AdditionalWorkItem 
              title="Alastair - Smart Home" 
              role="A full stack home automation platform, including console server application, web application, custom linux scripts for IOT devices and realtime sensor alogrithms." 
              company="Personal Project" 
              year="2016" 
            />
            <AdditionalWorkItem 
              title="Nearly - Weather Kiosk" 
              role="A minimalist kiosk app that provides hyper-accurate forecast alerts for specific regions of Singapore, using data from NEA's 2 Hour Nowcast (via Data.gov.sg)." 
              company="Personal Project" 
              year="2016" 
            />
            <AdditionalWorkItem 
              title="Relatus - Resource Management" 
              role="A bespoke system designed for the client's business operations (vocational rehabilitation services) with reporting and analysis capabilites." 
              company="SACS Employment Support Services" 
              year="2015" 
            />
            <AdditionalWorkItem 
              title="The Resistance - Mobile Game" 
              role='As a web based rendition of the card game "The Resistance", this mobile app replaces the need for physical game cards while retaining all the fun of the board game.' 
              company="Personal Project" 
              year="2013" 
            />
            <AdditionalWorkItem 
              title="TimeMoo - Chatbot Timezone Conversion" 
              role="By processing queries using natural language processing (NLP), users can perform timezone conversion without dealing with timezone complexities." 
              company="Personal Project" 
              year="2013" 
            />
            <AdditionalWorkItem 
              title="JT Concierge" 
              role="An iOS app that helps users easily obtain quotes for automobile services from Insprop, such as insurance, rentals, limousine and maintenance services." 
              company="Insprop Services"
              year="2012" 
            />
          </AdditionalWork>
        </Work>
      </div>
    )
  }
}

const ProjectContainer = (props) => {
  const {history} = props;
  const projectName = history.location.pathname.replace('/project', '');

  let projectArr = projectsData[projectName];
  if (projectArr === undefined) projectArr = [{type: 'error'}];

  console.log(projectArr);
  return (
    <div>
      <Project name={projectArr[0].content}>
        {
          projectArr.map((item, i) => {
            const { type, content } = item;
            if (type === 'error') return (
              <div>
                <ProjectLabel>404 Procrastination Error</ProjectLabel>
                <ProjectTitle>Yikes! This page does not exist!</ProjectTitle>
                <ProjectText>Jin is probably working on this now... probably.</ProjectText>
              </div>
            )
            else if (type === 'label') return <ProjectLabel>{content}</ProjectLabel>
            else if (type === 'title') return <ProjectTitle>{content}</ProjectTitle>
            else if (type === 'image') return <ProjectImage src={content} />
            else if (type === 'text') return (
              <ProjectText>{
                content.map((text_item) => {
                  if (typeof(text_item) === 'string') return `${text_item} `;
                  else if (typeof(text_item) === 'object') {
                    console.log(text_item);
                    if (text_item.type === 'list' && Array.isArray(text_item.content)) return <ProjectList items={text_item.content}/>;
                    else if (text_item.type === 'link') return <ProjectLink href={text_item.href}>{text_item.content}</ProjectLink>;
                  }
                })
              }</ProjectText>
            );
          })
        }
      </Project>

    </div>
  )
}

export default App;
