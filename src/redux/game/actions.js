import axios from "axios";

import {
  RECEIVE_GAME,
  RECEIVE_GAMES,
  START_FETCH_GAMES
} from "redux/game/actionTypes";

export const createGame = gameId => {
  return dispatch => {
    dispatch(startFetchGames());

    return axios
      .post("http://localhost:4000/games", { gameId: parseInt(gameId) })
      .then(response => {
        dispatch(receiveGame(response.data.game));
      });
    // TODO: catch error
  };
};

export const startFetchGames = () => ({
  type: START_FETCH_GAMES
});

export const receiveGames = gamesById => ({
  type: RECEIVE_GAMES,
  gamesById
});

export const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
});
