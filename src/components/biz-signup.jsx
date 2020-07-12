import React from "react";
import PageHeader from "./common/page-header";
import Form from "./common/form";
import Joi from "joi-browser";
import http from "../services/httpService";
import userService from "../services/userService";
import { apiUrl } from "../config.json";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

class BizSignup extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    try {
      data.biz = true;
      await http.post(`${apiUrl}/users`, data);
      //logging the bussines user here
      await userService.login(data.email, data.password);
      window.location = "/create-card";
    } catch (err) {
      if (err.response && err.response.status === 400) {
        this.setState({ errors: { email: "email is not valid" } });
        toast.error(err.response.data);
      }
    }
  };
  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container">
        <PageHeader
          title="Business Sign-Up Page"
          desc="Open a new business account for free!"
        />
        <div className="row">
          <div className="col-lg-6 m-auto">
            <form
              onSubmit={this.handleSubmit}
              action=""
              method="POST"
              className="mt-4"
              autoComplete="off"
            >
              {this.renderInput("Your business Name", "name")}
              {this.renderInput("Email", "email", "email")}
              {this.renderInput("Password", "password", "password")}
              {this.renderButton("Next", "", "btn btn-primary")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BizSignup;
