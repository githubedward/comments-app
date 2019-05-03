import React from "react";
import GlobalStyle, { StyledApp } from "./shared-styles/styles.global";
import Comments from "./Comments/index";

export default class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Comments />
      </StyledApp>
    );
  }
}
