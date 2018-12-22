import { combineReducers } from "redux";

import games from "redux/game/reducers";
import gameParticipants from "redux/game-participant/reducers";
import admin from "redux/admin/reducers";
import rankings from "redux/rankings/reducers";
import summoners from "redux/summoner/reducers";

export default combineReducers({
  games,
  gameParticipants,
  admin,
  rankings,
  summoners
});
