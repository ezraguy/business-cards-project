import React, { Component } from "react";
import PageHeader from "./page-header";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader title="Home" />
        <div className="row">
          <div className="col-12 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              maiores.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
