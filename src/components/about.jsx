import React, { Component } from "react";
import PageHeader from "./page-header";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader title="About" />
        <div className="row">
          <div className="col-12 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              dolorem eius quasi esse rerum necessitatibus, ipsam dicta
              veritatis praesentium. Voluptate.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
