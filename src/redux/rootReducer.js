import { combineReducers } from "redux";

import games from "redux/game/reducers";
import gameParticipants from "redux/game-participant/reducers";
import admin from "redux/admin/reducers";

export default combineReducers({ games, gameParticipants, admin });
