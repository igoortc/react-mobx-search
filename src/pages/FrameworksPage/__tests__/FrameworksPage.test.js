import { configure, mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "styled-components";
import Adapter from "enzyme-adapter-react-16";

import FrameworkStore from "../../../store/FrameworkStore";

import FrameworksPage from "../";
import theme from "../../../utils/constants/theme";

import { List, Item } from "../styled";

configure({ adapter: new Adapter() });

describe("FrameworksPage", function() {
  it("renders list of frameworks", function() {
    const frameworkStore = {
      filterFrameworks: [
        { title: "ReactJS", description: "JavaScript library" },
        { title: "VueJS", description: "Open-source JS library" },
        { title: "Angular", description: "Maintained by Google" }
      ],
      searchWord: ""
    };
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <FrameworksPage frameworkStore={frameworkStore} />
      </ThemeProvider>
    );

    expect(
      wrapper
        .find(Item)
        .at(0)
        .prop("id")
    ).toBe("ReactJS");
    expect(
      wrapper
        .find(Item)
        .at(1)
        .prop("id")
    ).toBe("VueJS");
    expect(
      wrapper
        .find(Item)
        .at(2)
        .prop("id")
    ).toBe("Angular");
  });

  it("renders filtered frameworks", function() {
    const frameworkStore = new FrameworkStore();
    frameworkStore.searchWord = "jquery";
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <FrameworksPage frameworkStore={frameworkStore} />
      </ThemeProvider>
    );

    expect(wrapper.find(List).props().children.length).toBe(2);

    expect(
      wrapper
        .find(Item)
        .at(0)
        .prop("id")
    ).toBe("Backbone.js");
    expect(
      wrapper
        .find(Item)
        .at(1)
        .prop("id")
    ).toBe("jQuery");
  });
});
