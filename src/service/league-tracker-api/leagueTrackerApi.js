import axios from "axios";

import config from "./config";
import { JSON_WEB_TOKEN } from "constants/localStorageKeys";

const api = axios.create({
  baseURL: config.getBaseUrl()
});

const getAuthorizationHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem(JSON_WEB_TOKEN)}`
});

const appInitApis = {
  getSinglePageAppInitializations: () => {
    return api.get("/single_page_app_initializations");
  }
};

const adminApis = {
  createAdminToken: (username, password) => {
    return api.post("/admin_token", {
      auth: { username, password }
    });
  },
  getLoginState: () => {
    const headers = getAuthorizationHeader();
    return api
      .get("/auth_checks", { headers })
      .then(() => true)
      .catch(() => false);
  }
};

const gameApis = {
  createGame: gameId => {
    const data = { gameId: parseInt(gameId) };
    const headers = getAuthorizationHeader();
    return api.post("/games", data, { headers });
  }
};

const gameParticipantApis = {
  updateGameParticipant: (participant, summonerName) => {
    const data = {
      gameParticipant: {
        lockVersion: participant.lockVersion,
        summonerName
      }
    };
    const headers = getAuthorizationHeader();
    return api.patch(`/game_participants/${participant.id}`, data, { headers });
  }
};

export default {
  ...appInitApis,
  ...adminApis,
  ...gameApis,
  ...gameParticipantApis
};
