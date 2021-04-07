import React from "react";
import ReactGA from "react-ga";
import { Segment, Button } from "semantic-ui-react";

import Navigation from "../components/Navigation";
import {
  FullscreenWrapper,
  BigHeader,
  Subtitle,
  BigSwash,
  TinyHeader,
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
            Safety Plan
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
            <Subtitle>FACE COVERINGS</Subtitle>
            <BigSwash>Masks Required!</BigSwash>
            <Subtitle>BY ORDER OF GOV. CHARLIE BAKER</Subtitle>
            <TinyHeader>
              All guests will need to wear masks
              <br />
              when not eating or drinking.
              <br />
            </TinyHeader>
            <br />
            <br />
            <br />
            <Subtitle>1ST CHOICE</Subtitle>
            <BigSwash>Get Vaccinated!</BigSwash>
            <Subtitle>
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
            </Subtitle>
            <TinyHeader>
              All guests should do their best to be fully
              <br />
              vaccinated two weeks prior to the wedding.
              <br />
            </TinyHeader>
            <br />
            <br />
            <br />
            <Subtitle>2ND CHOICE</Subtitle>
            <BigSwash>Get Tested!</BigSwash>
            <Subtitle>
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
            </Subtitle>
            <TinyHeader>
              If you cannot get vaccinated before the wedding,
              <br />
              please get tested no-earlier than 72 hours prior.
              <br />
            </TinyHeader>
            <a
              href="https://www.cvs.com/minuteclinic/covid-19-testing"
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
                  margin: "0rem auto 0rem auto",
                }}
              >
                FIND A TESTING LOCATION
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
