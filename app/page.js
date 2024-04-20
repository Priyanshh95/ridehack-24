import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  // page1,
  // page2,
  // page3,
  // page4,
} from '../sections';
import './page.css';

function Page() {
  return (
    <div className="bg-primary-black overflow-hidden bg_pic">
      <Navbar />
      <div className="glassmorphism" />
      <Hero />
      <div className="relative">
        <About />
        {/* <div className="gradient-03" />
        <Explore /> */}
      </div>
      <div className="relative">
        <div className="prizeGradient" />
        <GetStarted />

        <div className="gradient-03" />
        <Explore /> 

        <div className="gradient-04" />
        <WhatsNew />
        <div className="gradient-10" />
      </div>
      <World />

      <div className="gradient-04" />
        <Feedback />
      <div className="relative">
        <Insights />
{/* 
        <div className="relative">
        <Router>
      <Switch>
        <Route path="/page1" section={Page1} />
        <Route path="/page2" section={Page2} />
        <Route path="/page3" section={Page3} />
        <Route path="/page4" section={Page4} />
        <Route exact path="/">
          <div className="container">
            <Box image="./image30.jpeg" link="/page1" />
            <Box image="./image32.jpeg" link="/page2" />
            <Box image="./image33.jpeg" link="/page3" />
            <Box image="./image34.jpeg" link="/page4" />
          </div>
        </Route>
      </Switch>
    </Router>
        </div> */}

      </div>
      <Footer />
    </div>
  );
}

export default Page;
