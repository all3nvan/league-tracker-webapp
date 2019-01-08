import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import classNames from "classnames";

import "./Navbar.scss";
import AdminLoginContainer from "nav/admin-login/AdminLoginContainer";

class Navbar extends Component {
  shouldRenderPrivateLinks = () => {
    const { location } = this.props;
    const pathname = location.pathname;
    return pathname === "/rankings";
  };

  renderPrivateLinks = () => {
    if (this.shouldRenderPrivateLinks()) {
      return (
        <>
          <Link to="/rankings" className={this.getLinkClassNames("/rankings")}>
            Rankings
          </Link>
        </>
      );
    }
    return null;
  };

  getLinkClassNames = path => {
    const { location } = this.props;
    return classNames("navbar-item", {
      "navbar-item--active": path === location.pathname
    });
  };

  render() {
    const privateLinks = this.renderPrivateLinks();

    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className={this.getLinkClassNames("/")}>
              Match history
            </Link>
            {privateLinks}
          </div>

          <div className="navbar-end">
            <AdminLoginContainer />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
