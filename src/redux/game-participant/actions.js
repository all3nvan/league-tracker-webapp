import {RECEIVE_GAME_PARTICIPANTS, START_FETCH_GAME_PARTICIPANTS} from "redux/game-participant/actionTypes";

export const startFetchGameParticipants = () => ({
  type: START_FETCH_GAME_PARTICIPANTS
});

export const receiveGameParticipants = participantsById => ({
  type: RECEIVE_GAME_PARTICIPANTS,
  participantsById
});

export const updateGameParticipant = summonerName => {
  return dispatch => {
    console.log(summonerName);
  };
};
