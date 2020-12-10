import React from "react";
import { Menu, Dropdown, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { MenuItemText } from "../components/styled";

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
          text={` MORE INFO `}
          maxWidth={811}
          style={{
            zIndex: "1000",
            letterSpacing: "1px",
            fontWeight: "600",
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "transparent",
            color: "#315360",
            margin: "-3rem auto",
            fontSize: "1rem",
          }}
        >
          <Dropdown.Menu>
            <Dropdown.Item
              name="relnrob"
              active={activeItem === "relnrob"}
            >
              <Link to={`/`}><MenuItemText>HOME</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="relnrob"
              active={activeItem === "relnrob"}
            >
              <Link to={`/about`}><MenuItemText>ROBBIE & REL</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="accomodations"
              active={activeItem === "accomodations"}
            >
              <Link to={`/accomodations`}><MenuItemText>ACCOMODATIONS</MenuItemText></Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="registry"
            >
              <a href="http://www.zola.com/registry/shloopydoopy" target="new"><MenuItemText>REGISTRY</MenuItemText></a>
            </Dropdown.Item>
            <Dropdown.Item
              name="activities"
              active={activeItem === "activities"}
              onClick={this.handleItemClick}
            >
              <a href="https://www.google.com/maps/d/edit?mid=1YLg5y0YHQae1GVJJyoEsUFwioli6ddRY&usp=sharing" target="new"><MenuItemText>WEDDING MAP</MenuItemText></a>
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
            position: "absolute",
            zIndex: "1000",
            fontWeight: "600",
            backgroundColor: "white",
            letterSpacing: "1px",
            margin: "-2rem 1.5rem",
            color: "#315360",
            fontSize: ".75rem",
            marginLeft: "1rem"
          }}
        >
          <Menu.Item
            name="relnrob"
            active={activeItem === "relnrob"}
            onClick={this.handleItemClick}
          >
            <Link to={`/`}><MenuItemText>HOME</MenuItemText></Link>
          </Menu.Item>
          <Menu.Item
            name="relnrob"
            active={activeItem === "relnrob"}
            onClick={this.handleItemClick}
          >
            <Link to={`/about`}><MenuItemText>ROBBIE & REL</MenuItemText></Link>
          </Menu.Item>
          <Menu.Item
            name="accomodations"
            active={activeItem === "accomodations"}
          >
            <Link to={`/accomodations`}><MenuItemText>ACCOMODATIONS</MenuItemText></Link>
          </Menu.Item>
          <Menu.Item
            name="registry"
          >
            <a href="http://www.zola.com/registry/shloopydoopy" target="new"><MenuItemText>REGISTRY</MenuItemText></a>
          </Menu.Item>
          <Menu.Item
            name="activities"
            active={activeItem === "activities"}
            onClick={this.handleItemClick}
          >
            <a href="https://www.google.com/maps/d/edit?mid=1YLg5y0YHQae1GVJJyoEsUFwioli6ddRY&usp=sharing" target="new"><MenuItemText>WEDDING MAP</MenuItemText></a>
          </Menu.Item>
        </Responsive>
      </div >
    );
  }
}

export default Navigation;

