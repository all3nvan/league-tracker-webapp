import {
  RECEIVE_GAME_PARTICIPANT,
  RECEIVE_GAME_PARTICIPANTS,
  START_FETCH_GAME_PARTICIPANTS
} from "redux/game-participant/actionTypes";
import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";
import { receiveSummoner } from "redux/summoner/actions";

export const startFetchGameParticipants = () => ({
  type: START_FETCH_GAME_PARTICIPANTS
});

export const receiveGameParticipants = participantsById => ({
  type: RECEIVE_GAME_PARTICIPANTS,
  participantsById
});

export const receiveGameParticipant = participant => ({
  type: RECEIVE_GAME_PARTICIPANT,
  participant
});

export const updateGameParticipant = (participant, summonerName) => {
  return dispatch => {
    return leagueTrackerApi
      .updateGameParticipant(participant, summonerName)
      .then(response => {
        dispatch(receiveGameParticipant(response.data.gameParticipant));
        dispatch(receiveSummoner(response.data.summoner));
      })
      .catch(error => {
        // TODO: Show a toast or something
        console.log(error.response.status);
        console.log(error.response.data.message);
      });
  };
};
