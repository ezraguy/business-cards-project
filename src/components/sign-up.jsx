import React, { Component } from "react";
import PageHeader from "./common/page-header";
import Inputs from "./common/inputs";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <PageHeader
            title="Sign Up "
            desc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum"
          />
        </div>
        <div className="row">
          <div className="col-6 ">
            <Inputs label="Email" name="email" error="* error" />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
