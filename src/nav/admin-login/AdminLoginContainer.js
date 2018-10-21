import { connect } from "react-redux";

import AdminLogin from "./AdminLogin";
import { login } from "redux/admin/actions";

const mapStateToProps = state => ({
  loginInProgress: state.admin.loginInProgress,
  loginFailed: state.admin.loginFailed,
  isLoggedIn: state.admin.isLoggedIn
});
const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    return dispatch(login(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
