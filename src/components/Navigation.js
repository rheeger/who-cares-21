import React from "react";
import { Menu, Dropdown, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./navigation.css";
import styled from "styled-components";

class Navigation extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive
          as={Dropdown}
          button
          text="Menu"
          maxWidth={811}
          style={{
            zIndex: "1000",
            fontFamily: "AlbaMatter",
            letterSpacing: "1px",
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "transparent",
            color: "#456779",
            margin: "0 auto"
          }}
        >
          <Dropdown.Menu>
            <Dropdown.Item
              name="relnrob"
              active={activeItem === "relnrob"}
            >
              <Link to={`/`}><MenuItemText>Home</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="relnrob"
              active={activeItem === "relnrob"}
            >
              <Link to={`/about`}><MenuItemText>Robbie + Rel</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="accomodations"
              active={activeItem === "accomodations"}
            >
              <Link to={`/accomodations`}><MenuItemText>Accomodations</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="registry"
              active={activeItem === "registry"}
              onClick={this.handleItemClick}
            >
              <Link to="/"><MenuItemText>Registry</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="activities"
              active={activeItem === "activities"}
              onClick={this.handleItemClick}
            >
              <a href="https://www.google.com/maps/d/edit?mid=1YLg5y0YHQae1GVJJyoEsUFwioli6ddRY&usp=sharing" target="blank"><MenuItemText>Google Map</MenuItemText></a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Responsive>
        <Responsive
          as={Menu}
          minWidth={811}
          text
          borderless
          inverted
          style={{
            position: "fixed",
            zIndex: "1000",
            fontFamily: "AlbaMatter",
            backgroundColor: "white",
            letterSpacing: "1px",
            margin: "-2rem auto",
            color: "#315360"
          }}
        >
          <Menu.Item
            name="relnrob"
            active={activeItem === "relnrob"}
            onClick={this.handleItemClick}
          >
            <Link to={`/`}><MenuItemText>Home</MenuItemText></Link>
          </Menu.Item>
          <Menu.Item
            name="relnrob"
            active={activeItem === "relnrob"}
            onClick={this.handleItemClick}
          >
            <Link to={`/about`}><MenuItemText>Robbie + Rel</MenuItemText></Link>
          </Menu.Item>
          <Menu.Item
            name="accomodations"
            active={activeItem === "accomodations"}
          >
            <Link to={`/accomodations`}><MenuItemText>Accomodations</MenuItemText></Link>
          </Menu.Item>
          <Menu.Item
            name="registry"
          >
            <a href="http://www.zola.com/registry/shloopydoopy" target="blank"><MenuItemText>Registry</MenuItemText></a>
          </Menu.Item>
          <Menu.Item
            name="activities"
            active={activeItem === "activities"}
            onClick={this.handleItemClick}
          >
            <a href="https://www.google.com/maps/d/edit?mid=1YLg5y0YHQae1GVJJyoEsUFwioli6ddRY&usp=sharing" target="blank"><MenuItemText>Google Map</MenuItemText></a>
          </Menu.Item>
        </Responsive>
      </div>
    );
  }
}

export default Navigation;

const MenuItemText = styled.p`
color: #456779
`