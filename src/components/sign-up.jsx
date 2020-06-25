import React, { Component } from "react";
import PageHeader from "./page-header";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <PageHeader title="Sign Up " />
        </div>
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

export default SignUp;
