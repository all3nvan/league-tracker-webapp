import React, { Component } from "react";
import classNames from "classnames";

import "./AdminLogin.scss";
import { MIN_LOADING_TIME } from "constants/appConstants";

const theOnlyAdminAccount = "admin";

const initialState = {
  isOpen: false,
  username: theOnlyAdminAccount,
  password: ""
};

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  openModal = () => {
    this.setState(state => ({
      ...state,
      isOpen: true
    }));
  };

  closeModal = () => {
    this.setState(state => ({
      ...state,
      isOpen: false
    }));
  };

  updatePassword = event => {
    // Need to cache value due to event pooling: https://reactjs.org/docs/events.html#event-pooling
    const cachedPassword = event.target.value;
    this.setState(state => ({
      ...state,
      password: cachedPassword
    }));
  };

  submit = event => {
    event.preventDefault();

    this.props
      .login(this.state.username, this.state.password)
      .then(() => {
        return new Promise(resolve => {
          setTimeout(resolve, MIN_LOADING_TIME);
        });
      })
      .then(() => {
        this.setState(initialState);
      });
  };

  renderNavbarItem = () => {
    if (this.props.isLoggedIn) {
      return (
        <div className="navbar-item" onClick={this.props.logout}>
          Logout
        </div>
      );
    }
    return (
      <div className="navbar-item" onClick={this.openModal}>
        Admin login
      </div>
    );
  };

  renderLoginButton = () => {
    const loginButtonClassNames = classNames(
      "button",
      "button-primary",
      "admin-login__login-button",
      {
        "is-loading": this.props.loginInProgress
      }
    );

    if (this.props.isLoggedIn) {
      return (
        // Because the Font Awesome icon is removed when Logout is clicked, it needs to be wrapped
        // https://stackoverflow.com/questions/48358529/failed-to-execute-removechild-on-node-with-fontawesome-in-react
        <button className="button is-success admin-login__login-button">
          <span>
            <i className="fas fa-check" />
          </span>
        </button>
      );
    }
    return (
      <button className={loginButtonClassNames} type="submit">
        Login
      </button>
    );
  };

  render() {
    const adminLoginClassNames = classNames("modal", {
      "is-active": this.state.isOpen
    });
    const passwordInputClassNames = classNames("input", {
      "input-invalid": this.props.loginFailed
    });

    return (
      <>
        {this.renderNavbarItem()}

        <div className={adminLoginClassNames}>
          <div className="modal-background" onClick={this.closeModal} />
          <div className="modal-card admin-login__modal-card">
            <section className="modal-card-body">
              <form onSubmit={this.submit}>
                <div className="field">
                  <label className="label">Enter admin password</label>
                  <div className="control has-icons-left">
                    <input
                      className={passwordInputClassNames}
                      type="password"
                      value={this.state.password}
                      onChange={this.updatePassword}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                </div>

                <div className="field">{this.renderLoginButton()}</div>
              </form>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default AdminLogin;
