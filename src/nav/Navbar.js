import React, { Component } from "react";

import AdminLoginContainer from "nav/admin-login/AdminLoginContainer";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">League Tracker</div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <AdminLoginContainer>
              {/* TODO: hover effect?*/}
              <div className="navbar-item">Admin login</div>
            </AdminLoginContainer>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
