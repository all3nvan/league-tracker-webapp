import React, { Component } from "react";
import classNames from "classnames";

import "./AdminLogin.scss";

const onlyAdminUsername = "admin";

const initialState = {
  isOpen: false,
  username: onlyAdminUsername,
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

    this.props.login(this.state.username, this.state.password);

    this.setState(initialState);
  };

  render() {
    const clickableChildren = React.cloneElement(this.props.children, {
      onClick: this.openModal
    });

    const adminLoginClassNames = classNames("modal", {
      "is-active": this.state.isOpen
    });

    return (
      <>
        {clickableChildren}

        <div className={adminLoginClassNames}>
          <div className="modal-background" onClick={this.closeModal} />
          <div className="modal-card admin-login__modal-card">
            <section className="modal-card-body">
              <form onSubmit={this.submit}>
                <div className="field">
                  <label className="label">Enter admin password</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      value={this.state.password}
                      onChange={this.updatePassword}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <button
                    className="button button-primary admin-login__login-button"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default AdminLogin;
