import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { ThemeProvider } from "styled-components";

import App from "./App";
import FrameworkStore from "./store/FrameworkStore";

import theme from "./utils/constants/theme";
import GlobalStyle from "./utils/assets/style/global";

const frameworkStore = new FrameworkStore();

render(
  <Provider frameworkStore={frameworkStore}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
