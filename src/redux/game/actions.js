import axios from "axios";

export const createGame = gameId => {
  return dispatch => {
    axios.post("http://localhost:4000/games", { gameId: parseInt(gameId) });
    // TODO: Update match history
  };
};
