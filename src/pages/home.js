import React from "react";
import ReactGA from "react-ga";

import Navigation from "../components/Navigation";
import { HomepageWrapper, HomepageBigHeader, Subtitle, Swash, LittleHeader } from "../components/styled";

class Splash extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <HomepageWrapper>
          <HomepageBigHeader className="big-header">
            <Subtitle>PRESENTED BY</Subtitle>
            <Swash>Shloopy Doopy Enterprises</Swash>
            BERKSHIRE <br />
            COUNTY
            <LittleHeader>June 26 2021</LittleHeader>
            <Navigation />
          </HomepageBigHeader>
        </HomepageWrapper>
      </div>
    );
  }
}

export default Splash;