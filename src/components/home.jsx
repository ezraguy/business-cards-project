import React, { Component } from "react";
import PageHeader from "./common/page-header";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader title="Home" desc=" Lorem ipsum dolor sit amet" />
      </div>
    );
  }
}

export default Home;
