import React from "react";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img
          src={card.bizImage}
          className="card-img-top"
          alt={`${card.bizName} `}
          width="100"
          height="300"
        />
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b>
            {card.bizPhone}
            <br />
            {card.bizAddress}
          </p>
          <Link title="Edit card" to={`/my-cards/edit/${card._id}`}>
            <i className="fas fa-edit mr-2"></i>
          </Link>
          <Link title="Delete card" to={`/my-cards/delete/${card._id}`}>
            <i className="fas fa-trash-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
