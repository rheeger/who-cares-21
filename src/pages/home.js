import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

import Navigation from "../components/Navigation";
import greece from "../assets/images/greece.jpg";

class Splash extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <FullscreenWrapper>
          <BigHeader className="big-header">
            SHLOOPY DOOPY ENTERPRISES
            <Subtitle>June 26, 2021 - Berkshire County</Subtitle>
            <Navigation />
          </BigHeader>
        </FullscreenWrapper>
      </div>
    );
  }
}

export default Splash;

const FullscreenWrapper = styled.div`
  background-image: url(${greece});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  text-align: left;

  @media only screen and (max-width: 811px) {
    background-position: -200px 0px;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0rem;
  }
`;

const BigHeader = styled.p`
  font-family: AlbaSuper;
  font-weight: 400;
  font-size: 7rem;
  margin-top: 3rem;
  padding: 5rem;
  width: 100vw;
  color: #953c34;
  @media only screen and (max-width: 811px) {
    padding: 0;
    margin-top: 2rem;
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  color: #565656;
  font-family: AlbaMatter;
  letter-spacing: 1px;
  font-weight: 300;
  font-size: 2rem;
  padding-left: 10px;
  width: 100vw;
  @media only screen and (max-width: 811px) {
    font-size: 1rem;
  }
`;
