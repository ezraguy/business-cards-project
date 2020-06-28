import React from "react";
import PageHeader from "./common/page-header";
import Form from "./common/form";
import Joi from "joi-browser";

class SignUp extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <PageHeader
            title="Sign Up"
            desc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum"
          />
        </div>
        <div className="row">
          <div className="col-lg-6  mx-auto">
            <form
              onSubmit={this.handleSubmit}
              action=""
              method="POST"
              className="mt-4"
              autoComplete="off"
            >
              {this.renderInput("Your Name", "name")}
              {this.renderInput("Email", "email", "email")}
              {this.renderInput("Password", "password", "password")}
              {this.renderButton("Sign Up", "submit", "btn btn-primary")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
