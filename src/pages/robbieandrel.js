import React from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";

import Navigation from "../components/Navigation";
import {
  FullscreenWrapper,
  BigHeader,
  Subtitle,
  LittleHeader,
  EmojiImage,
} from "../components/styled";
import randr from "../assets/images/randr.jpg";
class RobbieAndRel extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <FullscreenWrapper>
          <BigHeader className="big-header">
            <Navigation />
            Robbie & Rel
          </BigHeader>
          <Segment
            raised
            style={{
              minWidth: "50vw",
              borderRadius: "0px",
              opacity: "0.90",
              textAlign: "center",
              padding: "3rem",
              marginBottom: " 250px",
            }}
          >
            <br />
            <EmojiImage src={randr} />
            <br />
            <br />
            <br />
            <br />
            <Subtitle>SUMMER 2005</Subtitle>
            <a href="https://www.icloud.com/sharedalbum/#B0VGWZuqDst54ja">
              <LittleHeader>
                Meet as kids at Eisner Camp in Great Barrington.
              </LittleHeader>
              <br />
            </a>
            <Subtitle>JULY 4 2016</Subtitle>
            <a href="https://www.icloud.com/sharedalbum/#B0VG4TcsmsuPT9v">
              <LittleHeader>Reconnect on Stockbridge Bowl.</LittleHeader>
              <br />
            </a>
            <Subtitle>JULY 9 2016</Subtitle>
            <a href="https://www.apothekemixology.com/location/nyc-apotheke/">
              <LittleHeader>
                Kiss on a street corner in Chinatown, NYC.
              </LittleHeader>
              <br />
            </a>
            <Subtitle>AUGUST 25 2016</Subtitle>
            <a href="https://www.flourandwater.com/">
              <LittleHeader>
                Go on their first date in San Francisco.
              </LittleHeader>
              <br />
            </a>
            <Subtitle>DECEMBER 26 2016</Subtitle>
            <a href="https://www.icloud.com/sharedalbum/#B0V5qXGF1sA7QO5">
              <LittleHeader>
                Take their first trip together—Mexico City.
              </LittleHeader>
              <br />
            </a>
            <Subtitle>FEBRUARY 13 2018</Subtitle>
            <a href="https://www.icloud.com/sharedalbum/#B0u5n8hH4onSVz">
              <LittleHeader>Become corgi parents.</LittleHeader>
              <br />
            </a>
            <Subtitle>AUGUST 21 2019</Subtitle>
            <a href="https://www.icloud.com/sharedalbum/#B0VG6XBubsLB8aO">
              <LittleHeader>Get engaged in Greece.</LittleHeader>
              <br />
            </a>
            <Subtitle>JUNE 26 2021</Subtitle>
            <Link to="/">
              <LittleHeader>...getting married in the Berkshires!</LittleHeader>
              <br />
            </Link>
          </Segment>
        </FullscreenWrapper>
      </div>
    );
  }
}

export default RobbieAndRel;
