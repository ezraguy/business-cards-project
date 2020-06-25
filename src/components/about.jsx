import React, { Component } from "react";
import PageHeader from "./common/page-header";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader
          title="About"
          desc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              dolorem eius quasi ."
        />
      </div>
    );
  }
}

export default About;
