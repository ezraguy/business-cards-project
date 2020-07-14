import React from "react";
import Form from "./common/form";
import PageHeader from "./common/page-header";
import Joi from "joi-browser";
import cardService from "../services/cardService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
class EditCard extends Form {
  state = {
    data: {
      _id: "",
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
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
    await cardService.editCard(data);
    toast.success("Card has been Updated!");
    this.props.history.replace("/my-cards");
  };

  componentDidMount = async () => {
    const cardId = this.props.match.params.id;
    const { data } = await cardService.getCard(cardId);
    //delting the the fileds that dont match the scheme (that we got from mongo)
    delete data.__v;
    delete data.user_id;
    delete data.bizNumber;
    this.setState({ data });
  };

  render() {
    return (
      <div className="container">
        <PageHeader title="Edit Card" />
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
              {this.renderButton("Update Card", "submit", "btn btn-primary ")}
              <Link to="/my-cards" className="btn btn-secondary ml-2">
                cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCard;
