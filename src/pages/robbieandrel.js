import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

import Navigation from "../components/Navigation";
import greece from "../assets/images/ShloopDoop.png";

class RobbieAndRel extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <FullscreenWrapper>
          <BigHeader className="big-header">
            <Navigation />
            Robbie + Rel
          </BigHeader>
        </FullscreenWrapper>
      </div>
    );
  }
}

export default RobbieAndRel;

const FullscreenWrapper = styled.div`
  background-image: url(${greece});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 90vh;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  text-align: left;

  @media only screen and (max-width: 811px) {
    background-position: -200px 50px;
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
  padding: 3rem;
  width: 100vw;
  color: #315360;
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
  padding-left: 5px;
  width: 100vw;
  @media only screen and (max-width: 811px) {
    font-size: 1rem;
  }
`;
