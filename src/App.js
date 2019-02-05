import React, { Component } from 'react';
import "typeface-barlow";
import Nav from './nav';
import Hero from './hero';
import {Work, FeaturedWork, FeaturedWorkItem, AdditionalWork, AdditionalWorkItem} from './work';
import Contact from './contact';

import thumb_coingossip from './images/thumb-coingossip.png';
import thumb_smartmirror from './images/thumb-smartmirror.png';

import './App.css';

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
    //window.scrollTo(0, this.sections[sectionName].current.offsetTop);
    this.sections[sectionName].current.scrollIntoView({behavior: 'smooth', block: 'start',});
  }

  render() {
    return (
      <div className="App">

        <Nav scrollToFunction={this.scrollToFunction} />

        <Hero />

        <Work innerRef={this.sections.work}>
          <FeaturedWork>
            <FeaturedWorkItem src={thumb_coingossip} title="CoinGossip"/>
            <FeaturedWorkItem src={thumb_smartmirror} title="Smart Mirror"/>
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
              role='A web based renditon of the card game "The Resistance", this mobile app replaces the need for physical game cards while retaining all the fun of the board game.' 
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

        <Contact innerRef={this.sections.contact}/>
      </div>
    );
  }
}

export default App;
