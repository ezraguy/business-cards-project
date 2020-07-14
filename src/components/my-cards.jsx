import React, { Component } from "react";
import PageHeader from "./common/page-header";
import Card from "./card";
import cardService from "../services/cardService";
class MyCards extends Component {
  state = { cards: [] };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) {
      this.setState({ cards: data });
    }
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <PageHeader title="My cards" />
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => <Card key={card._id} card={card} />)}
        </div>
      </div>
    );
  }
}

export default MyCards;
