import React from "react";
import ReactGA from "react-ga";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import {
  HomepageWrapper,
  HomepageBigHeader,
  Subtitle,
  Swash,
  LittleHeader,
  Frame,
} from "../components/styled";
import "../components/style.css";
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
            BERKSHIRE
            <br />
            COUNTY
            <LittleHeader>June 26 2021</LittleHeader>
            <Navigation />
            <Link to={`/itinerary`}>
              <Button
                compact
                color="grey"
                size="huge"
                className="ui button blue-button"
                style={{
                  maxWidth: "300px",
                  fontFamily: "Futura",
                  fontWeight: "600",
                  margin: "-2rem auto 1rem auto",
                }}
              >
                WEEKEND INFO
                <i
                  className="arrow right icon"
                  style={{ margin: "0 -.5rem 0 .5rem", color: "#ffffff" }}
                />
              </Button>
            </Link>
          </HomepageBigHeader>
          <Frame>
            <a
              href="https://www.levelframes.com/frames/new?width=8.125&height=11.25"
              target="blank"
            >
              <Button
                compact
                color="grey"
                size="tiny"
                className="ui button blue-button"
                style={{
                  maxWidth: "300px",
                  fontFamily: "Futura",
                  fontWeight: "600",
                  margin: "0rem auto .5rem auto",
                }}
              >
                FRAME ME
                <i
                  className="arrow right icon"
                  style={{ margin: "0 -.25rem 0 .25rem", color: "#ffffff" }}
                />
              </Button>
            </a>
          </Frame>
        </HomepageWrapper>
      </div>
    );
  }
}

export default Splash;
