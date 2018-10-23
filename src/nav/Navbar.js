import React, { Component } from "react";

import "./Navbar.scss";
import AdminLoginContainer from "nav/admin-login/AdminLoginContainer";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">Match history</div>
          </div>

          <div className="navbar-end">
            <AdminLoginContainer />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
