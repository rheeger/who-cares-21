import React from "react";
import ReactGA from "react-ga";
import { Segment, Button } from "semantic-ui-react";

import Navigation from "../components/Navigation";
import {
  FullscreenWrapper,
  BigHeader,
  Subtitle,
  TinyHeader,
  BigSwash,
} from "../components/styled";
class RobbieAndRel extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <FullscreenWrapper>
          <BigHeader className="big-header">
            <Navigation />
            Weekend Itinerary
          </BigHeader>
          <Segment
            raised
            style={{
              minWidth: "50vw",
              borderRadius: "0px",
              opacity: "0.90",
              textAlign: "center",
              padding: "3rem",
              marginBottom: " 10rem",
            }}
          >
            <br />
            <Subtitle>8PM FRIDAY JUNE 25TH</Subtitle>
            <BigSwash>Welcome Soiree</BigSwash>
            <Subtitle>THE LAKE HOUSE INN, SMART CASUAL</Subtitle>
            <TinyHeader>
              Come kickoff the weekend with dessert and
              <br />
              cocktails by the waters of Laurel Lake.
            </TinyHeader>
            <Subtitle>TRANSIT</Subtitle>
            <TinyHeader>
              Park at the Black Swan Inn
              <br />
              and shuttles will take you
              <br />
              up the hill to the Lake House Inn.
            </TinyHeader>
            <a
              href="https://www.google.com/maps?cid=458095394546800747"
              target="new"
            >
              <Button
                className="ui button blue-button"
                compact
                fluid
                size="small"
                color="grey"
                style={{
                  maxWidth: "300px",
                  fontFamily: "Futura",
                  fontWeight: "600",
                  margin: "0rem auto .5rem auto",
                }}
              >
                GET DIRECTIONS
              </Button>
            </a>
            <br />
            <br />
            <br />
            <br />
            <Subtitle>5PM SATURDAY JUNE 26TH</Subtitle>
            <BigSwash>Wedding Ceremony</BigSwash>
            <Subtitle>HANCOCK SHAKER VILLIAGE, DISCO COCKTAIL</Subtitle>
            <TinyHeader>
              Outdoor ceremony in the round followed
              <br />
              by an evening of dinner and dancing.
            </TinyHeader>
            <Subtitle>TRANSIT</Subtitle>
            <TinyHeader>
              Shuttles will be provided to
              <br />
              and from the Lenox Area.
            </TinyHeader>
            <a
              href="https://www.google.com/maps?cid=16147019334668679257"
              target="new"
            >
              <Button
                className="ui button blue-button"
                compact
                fluid
                size="small"
                color="grey"
                style={{
                  maxWidth: "300px",
                  fontFamily: "Futura",
                  fontWeight: "600",
                  margin: "0rem auto .5rem auto",
                }}
              >
                GET DIRECTIONS
              </Button>
            </a>
            <br />
            <br />
            <br />
            <br />
            <Subtitle>10AM SUNDAY JUNE 27TH</Subtitle>
            <BigSwash>Farewell Brunch</BigSwash>
            <Subtitle>LAKE HOUSE INN, COMFY-COZY</Subtitle>
            <TinyHeader>
              Bagels, lox, babka...
              <br />
              See ya!
            </TinyHeader>
            <Subtitle>TRANSIT</Subtitle>
            <TinyHeader>
              Park at the Lake House Inn
              <br />
              if available, or head to the boat launch
              <br />
              or Black Swan Inn and make the 5 mins walk.
            </TinyHeader>
            <a
              href="https://www.google.com/maps?cid=458095394546800747"
              target="new"
            >
              <Button
                className="ui button blue-button"
                compact
                fluid
                size="small"
                color="grey"
                style={{
                  maxWidth: "300px",
                  fontFamily: "Futura",
                  fontWeight: "600",
                  margin: "0rem auto .5rem auto",
                }}
              >
                GET DIRECTIONS
              </Button>
            </a>

            <br />
            <br />
            <br />
            <br />
          </Segment>
        </FullscreenWrapper>
      </div>
    );
  }
}

export default RobbieAndRel;
