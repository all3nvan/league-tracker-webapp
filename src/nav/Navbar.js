import React, { Component } from "react";

import "./Navbar.scss";
import AdminLoginContainer from "nav/admin-login/AdminLoginContainer";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__wrapper">
        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">Match history</div>
            </div>

            <div className="navbar-end">
              <AdminLoginContainer />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
