import React from "react";
import PageHeader from "./common/page-header";
import Form from "./common/form";
import Joi from "joi-browser";
import userService from "../services/userService";
import { toast } from "react-toastify";
class SignIn extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {},
    };
  }

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/";
    } catch (err) {
      if (err.response && err.response.status === 400) {
        this.setState({ errors: { email: err.response.data } });
        toast.error(err.response.data);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <PageHeader
            title="Sign In"
            desc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum"
          />
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <form
              onSubmit={this.handleSubmit}
              action=""
              method="POST"
              className="mt-4"
              autoComplete="off"
            >
              {this.renderInput("Email", "email", "email")}
              {this.renderInput("Password", "password", "password")}
              {this.renderButton("Sign in", "submit", "btn btn-primary ")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
