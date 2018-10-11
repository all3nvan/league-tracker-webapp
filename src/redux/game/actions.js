import axios from "axios";

import { RECEIVE_GAMES, START_FETCH_GAMES } from "redux/game/actionTypes";

export const createGame = gameId => {
  // TODO: Dispatch startFetchGames
  return dispatch => {
    axios.post("http://localhost:4000/games", { gameId: parseInt(gameId) });
    // TODO: Dispatch receiveGame
  };
};

export const startFetchGames = () => ({
  type: START_FETCH_GAMES
});

export const receiveGames = gamesById => ({
  type: RECEIVE_GAMES,
  gamesById
});
