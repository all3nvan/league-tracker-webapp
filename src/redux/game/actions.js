import {
  RECEIVE_GAME,
  RECEIVE_GAMES,
  START_FETCH_GAMES
} from "redux/game/actionTypes";
import { receiveGameParticipants } from "redux/game-participant/actions";
import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";

export const createGame = gameId => {
  return dispatch => {
    dispatch(startFetchGames());

    return leagueTrackerApi
      .createGame(gameId)
      .then(response => {
        dispatch(receiveGame(response.data.game));
        // TODO: Really should write tests for this
        const gameParticipantsById = response.data.gameParticipants.reduce(
          (obj, participant) => {
            obj[participant.id] = participant;
            return obj;
          },
          {}
        );
        dispatch(receiveGameParticipants(gameParticipantsById));
      })
      .catch(error => {
        // TODO: Show a toast or something
        console.log(error.response);
      });
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
