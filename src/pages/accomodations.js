import React from "react";
import ReactGA from "react-ga";

import Navigation from "../components/Navigation";
import { FullscreenWrapper, BigHeader, BigSwash, Subtitle, TinyHeader } from "../components/styled";
import { Segment, Button } from "semantic-ui-react"
import "../components/style.css"
class Accomodations extends React.Component {
  render() {
    ReactGA.initialize("UA-164846205-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div>
        <FullscreenWrapper>
          <BigHeader className="big-header">
            <Navigation />
            Accomodations
          </BigHeader>
          <Segment raised style={{ minWidth: "50vw", borderRadius: "0px", opacity: "0.90", textAlign: "center", padding: "3rem", marginBottom: " 10rem" }}>
            <Subtitle>HOME RENTAL</Subtitle>
            <BigSwash>Air Bed & Breakfasts</BigSwash>
            <Subtitle>
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
            </Subtitle>
            <TinyHeader>
              Pick from a selection of rental options.
            <br />
            Book early, it's the most popular time!
             </TinyHeader>
            <a href="https://www.airbnb.com/wishlists/872572412/join?invite_code=TSETAEBA&inviter_id=24329714&s=67&unique_share_id=763fe7bb-e1cc-46a2-98fe-8485c1654c2f" target="blank"><Button className="ui button blue-button" compact fluid size="small" color="grey" style={{ maxWidth: "300px", fontFamily: "Futura", fontWeight: "600", margin: "0rem auto .5rem auto" }}>SEE AIRBNB LISTINGS</Button></a>
            <a href="https://www.vrbo.com/tripboard/i/3e6f14ad-6e53-41b2-b51d-eef1b89ea92d?client=web&oc=xti2k_kt4Vy6w19ZrDTPF" target="blank"><Button className="ui button blue-button" compact fluid size="small" color="grey" style={{ maxWidth: "300px", fontFamily: "Futura", fontWeight: "600", margin: "0rem auto 0rem auto" }}>SEE VRBO LISTINGS</Button></a>
            <br />
            <br />
            <br />
            <br />
            <Subtitle>HOTEL</Subtitle>
            <BigSwash>Courtyard Marriott</BigSwash>
            <Subtitle>
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
            </Subtitle>
            <TinyHeader>
              70 Pittsfield Rd<br />
              Lenox, MA 01240
            </TinyHeader>
            <a href="https://www.marriott.com/hotels/travel/gbrcy-courtyard-lenox-berkshires/" target="blank"><Button className="ui button blue-button" compact fluid size="small" color="grey" style={{ maxWidth: "300px", fontFamily: "Futura", fontWeight: "600", margin: "0rem auto 0rem auto" }}>BOOK THIS HOTEL</Button></a>
            <br />
            <br />
            <br />
            <br />

            <Subtitle>HOTEL</Subtitle>
            <BigSwash>Black Swan Inn</BigSwash>
            <Subtitle>
              <i className="star icon" />
              <i className="star icon" />
              <i className="star icon" />
            </Subtitle>
            <TinyHeader>
              435 Laurel St, <br />
                Lee, MA 01238
             </TinyHeader>
            <a href="https://www.choicehotels.com/massachusetts/lee/ascend-hotels/ma177/rates?checkInDate=2021-06-25&checkOutDate=2021-06-27" target="blank"><Button className="ui button blue-button" compact fluid size="small" color="grey" style={{ maxWidth: "300px", fontFamily: "Futura", fontWeight: "600", margin: "0rem auto 0rem auto" }}>BOOK THIS HOTEL</Button></a>
            <br />
            <br />


          </Segment>
        </FullscreenWrapper >
      </div >
    );
  }
}

export default Accomodations;

