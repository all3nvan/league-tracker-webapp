import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item">League Tracker</div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">Admin</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
