import React from "react";
import Form from "./common/form";
import PageHeader from "./common/page-header";
import Joi from "joi-browser";
import cardService from "../services/cardService";
import { toast } from "react-toastify";
class CreateCard extends Form {
  state = {
    data: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    //if the users did not enter a url so we delete the field bizimage so the default image can be shown
    if (!data.bizImage) delete data.bizImage;

    await cardService.createCard(data);
    toast.success("Card has been created!");
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader
          title="Create a new card"
          desc="Create a card for your business!"
        />
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <form
              onSubmit={this.handleSubmit}
              action=""
              method="POST"
              className="mt-4"
              autoComplete="off"
            >
              {this.renderInput("Bussniess Name", "bizName")}
              {this.renderInput("Bussniess Description", "bizDescription")}
              {this.renderInput("Bussniess Address", "bizAddress")}
              {this.renderInput("Bussniess Phone", "bizPhone", "tel")}
              {this.renderInput("Bussniess image (URL)", "bizImage")}
              {this.renderButton("Create Card", "submit", "btn btn-primary ")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
