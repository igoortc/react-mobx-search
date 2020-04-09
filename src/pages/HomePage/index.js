import React, { Component } from "react";

import { Title } from "../../components/Title";

export default class HomePage extends Component {
  render() {
    return (
      <Title>
        <span role="img" aria-label="Home">
          🏠
        </span>{" "}
        Home
      </Title>
    );
  }
}
