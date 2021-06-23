import styled from "styled-components";
import greece from "../assets/images/ShloopDoop.png";

export const MenuItemText = styled.p`
  color: #315360;
  text-align: center;
  font-family: Futura;
  font-weight: 600;
  font-size: 0.75rem;
`;

export const FullscreenWrapper = styled.div`
  background-image: url(${greece});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 90vh;
  background-attachment: fixed;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  text-align: left;

  @media only screen and (max-width: 811px) {
    background-position: 70% 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0rem;
  }
`;

export const BigHeader = styled.p`
  font-family: Bookman-JF-Pro;
  font-feature-settings: "swsh" on;
  font-weight: 400;
  font-size: 4rem;
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

export const LittleHeader = styled.p`
  font-family: Bookman-JF-Pro;
  font-weight: 400;
  font-size: 2rem;
  padding: 1rem;
  color: #315360;
  @media only screen and (max-width: 811px) {
    padding: 0;
    font-size: 1.5rem;
  }
`;

export const TinyHeader = styled.p`
  font-family: Bookman-JF-Pro;
  font-weight: 400;
  font-size: 1.25rem;
  max-width: 30rem;
  margin: -1rem auto 1rem auto;
  padding: 1rem;
  color: #315360;
  @media only screen and (max-width: 811px) {
    font-size: 1rem;
    max-width: 60rem;
  }
`;

export const Subtitle = styled.p`
  color: #315360;
  font-family: Futura;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 0.75rem;
  @media only screen and (max-width: 811px) {
    font-size: 0.75rem;
    max-width: 90vw;
  }
`;

export const Swash = styled.p`
  color: #315360;
  font-family: Bookman-JF-Pro;
  font-weight: bold;
  font-feature-settings: "swsh" on;
  font-size: 1.25rem;
  @media only screen and (max-width: 811px) {
    font-size: 1.5rem;
  }
`;

export const BigSwash = styled.p`
  color: #315360;
  font-family: Bookman-JF-Pro;
  letter-spacing: 1px;
  font-weight: bold;
  font-feature-settings: "swsh" on;
  font-size: 2.5rem;
  padding-left: 5px;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 811px) {
    font-size: 2.5rem;
  }
`;

export const HomepageWrapper = styled.div`
  background-image: url(${greece});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 90vh;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  margin-left: 4rem;
  text-align: center;

  @media only screen and (max-width: 811px) {
    background-position: 70% 40px;
    text-align: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 0rem;
    padding-left: 0.25rem;
  }
`;

export const HomepageBigHeader = styled.p`
  font-family: Bookman-JF-Pro;
  font-weight: 400;
  font-size: 5rem;
  margin-top: 3rem;
  padding: 3rem;
  color: #315360;
  line-height: 6rem;
  @media only screen and (max-width: 811px) {
    line-height: 4rem;
    padding: 0;
    font-size: 3.5rem;
  }
`;

export const Frame = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

export const EmojiImage = styled.img`
  width: 100vw;
  height: auto;
  padding: 0 0.5rem;
  max-width: 40rem;
  border-radius: 500px;
  @media only screen and (max-width: 811px) {
    margin-left: 0;
    max-width: 90vw;
  }
`;
