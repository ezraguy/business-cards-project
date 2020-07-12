import React from "react";
import PageHeader from "./common/page-header";
import Form from "./common/form";
import Joi from "joi-browser";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

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

  async doSubmit() {
    const data = { ...this.state.data };

    try {
      //sending the users data
      data.biz = false;
      await http.post(`${apiUrl}/users`, data);
      toast.success("you registered successfully!", { position: "top-center" });
      this.props.history.replace("/user/sign-in");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error(err.response.data);
      }
    }
  }

  render() {
    //if the user is already signed in and tryies to go the sign up it will redirect to the home page
    if (userService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="row">
          <PageHeader
            title="Sign Up"
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
