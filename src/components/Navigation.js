import React from "react";
import { Menu, Dropdown, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./navigation.css";

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
          fluid
          maxWidth={811}
          text="Menu"
          style={{
            zIndex: "1000",
            fontFamily: "AlbaMatter",
            letterSpacing: "1px",
            fontSize: "1rem",
            textAlign: "center",
            borderRadius: "0px",
            marginBottom: "1rem",
          }}
        >
          <Dropdown.Menu>
            <Dropdown.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
              style={{
                zIndex: "1000",
                textAlign: "center",
              }}
            >
              Home
            </Dropdown.Item>
            <Dropdown.Item
              name="accomodations"
              active={activeItem === "accomodations"}
              onClick={this.handleItemClick}
            >
              Accomodations
            </Dropdown.Item>
            <Dropdown.Item
              name="registry"
              active={activeItem === "registry"}
              onClick={this.handleItemClick}
            >
              <Link to="/">Registry</Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="relnrob"
              active={activeItem === "relnrob"}
              onClick={this.handleItemClick}
            >
              <Link to={`/orgs`}>R + R</Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="schedule"
              active={activeItem === "schedule"}
              onClick={this.handleItemClick}
            >
              <Link to={`/orgs`}>Schedule</Link>
            </Dropdown.Item>
            <Dropdown.Item
              name="activities"
              active={activeItem === "activities"}
              onClick={this.handleItemClick}
            >
              <Link to={`/orgs`}>Activities</Link>
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
            backgorundColor: null,
            letterSpacing: "1px",
            margin: "-2rem auto",
          }}
        >
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="accomodations"
            active={activeItem === "accomodations"}
            onClick={this.handleItemClick}
          >
            Accomodations
          </Menu.Item>
          <Menu.Item
            name="registry"
            active={activeItem === "registry"}
            onClick={this.handleItemClick}
          >
            <Link to="/">Registry</Link>
          </Menu.Item>
          <Menu.Item
            name="relnrob"
            active={activeItem === "relnrob"}
            onClick={this.handleItemClick}
          >
            <Link to={`/orgs`}>R + R</Link>
          </Menu.Item>
          <Menu.Item
            name="schedule"
            active={activeItem === "schedule"}
            onClick={this.handleItemClick}
          >
            <Link to={`/orgs`}>Schedule</Link>
          </Menu.Item>
          <Menu.Item
            name="activities"
            active={activeItem === "activities"}
            onClick={this.handleItemClick}
          >
            <Link to={`/orgs`}>Activities</Link>
          </Menu.Item>
        </Responsive>
      </div>
    );
  }
}

export default Navigation;
