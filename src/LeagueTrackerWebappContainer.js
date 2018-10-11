import { connect } from "react-redux";

import LeagueTrackerWebapp from "LeagueTrackerWebapp";
import { fetchAppInitData } from "redux/app-init/actions";

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  initApp: () => {
    dispatch(fetchAppInitData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueTrackerWebapp);
