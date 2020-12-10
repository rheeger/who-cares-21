import React from "react";
import ReactGA from "react-ga";
import { Button } from "semantic-ui-react";

import Navigation from "../components/Navigation";
import { HomepageWrapper, HomepageBigHeader, Subtitle, Swash, LittleHeader, Frame } from "../components/styled";
import "../components/style.css"
class Splash extends React.Component {
  render() {
    ReactGA.initialize("G-0LBENZ4EVM");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <HomepageWrapper>
          <HomepageBigHeader className="big-header">
            <Subtitle>PRESENTED BY</Subtitle>
            <Swash>Shloopy Doopy Enterprises</Swash>
            BERKSHIRE<br />
            COUNTY
            <LittleHeader>June 26 2021</LittleHeader>
            <Navigation />
          </HomepageBigHeader>
          <Frame>
            <a href="https://www.levelframes.com/frames/new?width=8.125&height=11.25" target="blank">
              <Button compact color="grey" className="ui button blue-button">
                Frame Me!
              </Button>  
            </a>
          </Frame>
        </HomepageWrapper>
      </div>
    );  
  }
}

export default Splash;