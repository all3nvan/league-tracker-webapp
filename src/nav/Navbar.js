import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import classNames from "classnames";

import "./Navbar.scss";
import AdminLoginContainer from "nav/admin-login/AdminLoginContainer";
import routes from "constants/routes";

class Navbar extends Component {
  privateRoutes = ["/rankings", "/matchmaking", "/teams"];

  shouldRenderPrivateLinks = () => {
    const { location } = this.props;
    return this.privateRoutes.includes(location.pathname);
  };

  renderPrivateLinks = () => {
    if (!this.shouldRenderPrivateLinks()) {
      return null;
    }
    return (
      <>
        <Link
          to={routes.RANKINGS}
          className={this.getLinkClassNames([routes.RANKINGS])}
        >
          Rankings
        </Link>
        <Link
          to={routes.MATCHMAKING}
          className={this.getLinkClassNames([routes.MATCHMAKING, routes.TEAMS])}
        >
          Matchmaking
        </Link>
      </>
    );
  };

  getLinkClassNames = activePaths => {
    const { location } = this.props;
    return classNames("navbar-item", {
      "navbar-item--active": activePaths.includes(location.pathname)
    });
  };

  render() {
    const privateLinks = this.renderPrivateLinks();

    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link
              to={routes.MATCH_HISTORY}
              className={this.getLinkClassNames([routes.MATCH_HISTORY])}
            >
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
