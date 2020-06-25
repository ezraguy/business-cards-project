import React, { Component } from "react";

class PageHeader extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-4">
            <h1 className="display-4">{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
