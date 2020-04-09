import React, { Component } from "react";

import { List, NavItem } from "./styled";

export default class Navigation extends Component {
  render() {
    return (
      <List>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/modeler">Modeler</NavItem>
        <NavItem to="/frameworks">Frameworks</NavItem>
      </List>
    );
  }
}
