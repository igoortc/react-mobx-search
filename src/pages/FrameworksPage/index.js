import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { Title } from "../../components/Title";

import {
  Search,
  List,
  Item,
  ItemTitle,
  ItemDescription,
  EmptyState
} from "./styled";

@inject("frameworkStore")
@observer
class FrameworksPage extends Component {
  handleChange = e => {
    this.props.frameworkStore.searchWord = e.target.value;
  };

  render() {
    let { searchWord, filterFrameworks } = this.props.frameworkStore;
    return (
      <div>
        <Title>
          <span role="img" aria-label="Mechanic person">
            🧑‍🔧
          </span>{" "}
          Frameworks
        </Title>
        <Search
          value={searchWord}
          onChange={this.handleChange}
          placeholder="Click to search"
        />
        {searchWord.length >= 0 && filterFrameworks.length > 0 ? (
          <List>
            {filterFrameworks.map(framework => (
              <Item key={framework.title} id={framework.title}>
                <ItemTitle>{framework.title}</ItemTitle>
                <ItemDescription>{framework.description}</ItemDescription>
              </Item>
            ))}
          </List>
        ) : (
          <EmptyState>
            No results!{" "}
            <span role="img" aria-label="Sad face">
              ☹️
            </span>
          </EmptyState>
        )}
      </div>
    );
  }
}

export default FrameworksPage;
