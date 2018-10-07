import axios from "axios";

export const createMatch = matchId => {
  return dispatch => {
    axios.post("http://localhost:4000/games", { gameId: parseInt(matchId) });
    // TODO: Update match history
  };
};
