import { connect } from "react-redux";

import AdminLogin from "./AdminLogin";
import { login } from "redux/admin/actions";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    dispatch(login(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
