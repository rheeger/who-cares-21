import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

class Splash extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <HomePageWrapper>
          <FullscreenWrapper>
            <BigHeader className="big-header">
              SHLOOPY DOOPY ENTERPRISES
            </BigHeader>
            <Subtitle>June 26, 2021</Subtitle>

            <BottomButton href="#about" className="ui button basic compact">
              <i className="arrow down icon" />
              Learn More
            </BottomButton>
          </FullscreenWrapper>
        </HomePageWrapper>
      </div>
    );
  }
}

export default Splash;

const HomePageWrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const FullscreenWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  text-align: center;

  @media only screen and (max-width: 811px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0rem;
  }
`;

const BigHeader = styled.p`
  font-family: all-round-gothic;
  font-weight: 400;
  font-size: 5rem;
  margin-top: 3rem;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 4rem;
    padding: 0.1rem;
  }
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  margin: -3rem 0 0 0;
  max-width: 33vw;
  @media only screen and (max-width: 811px) {
    max-width: 70vw;
    font-size: 1rem;
    margin: -2rem 0 0 0;
  }
`;

const BottomButton = styled.a`
  margin: 0 auto;

  @media only screen and (min-width: 811px) {
    position: absolute;
    bottom: calc(100% - 100vh + 5rem);
  }
`;
