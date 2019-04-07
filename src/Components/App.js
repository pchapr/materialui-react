import React, { Component, Fragment } from "react";
import { render } from "react-dom";
//Named imports
import { Header, Footer } from "./Layouts";
import Charts from "./Charts";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Charts />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
