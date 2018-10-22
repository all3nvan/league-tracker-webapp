import { connect } from "react-redux";

import LeagueTrackerWebapp from "LeagueTrackerWebapp";
import { fetchAppInitData } from "redux/app-init/actions";
import { initLoginState } from "redux/admin/actions";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  initAppData: () => {
    dispatch(fetchAppInitData());
  },
  initLoginState: () => {
    dispatch(initLoginState());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueTrackerWebapp);
