import { connect } from "react-redux";

import AdminLogin from "./AdminLogin";
import { login, logout } from "redux/admin/actions";

const mapStateToProps = state => ({
  loginInProgress: state.admin.loginInProgress,
  loginFailed: state.admin.loginFailed,
  isLoggedIn: state.admin.isLoggedIn
});
const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    return dispatch(login(username, password));
  },
  logout: () => {
    dispatch(logout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
