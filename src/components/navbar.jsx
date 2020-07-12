/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <Link className="navbar-brand" to="/">
            bCards
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              {this.props.user && this.props.user.biz && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cards">
                    My cards
                  </NavLink>
                </li>
              )}
            </ul>

            <ul className="navbar-nav ">
              {!this.props.user && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/sign-in">
                      Sign in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/sign-up">
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/biz/sign-up">
                      Business
                    </Link>
                  </li>
                </React.Fragment>
              )}
              {this.props.user && (
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/logout">
                      Log Out
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
