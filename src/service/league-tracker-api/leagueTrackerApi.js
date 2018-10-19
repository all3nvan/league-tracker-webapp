import axios from "axios";

import config from "./config";

const api = axios.create({
  baseURL: config.getBaseUrl()
});

const appInitApis = {
  getSinglePageAppInitializations: () => {
    return api.get("/single_page_app_initializations");
  }
};

const gameApis = {
  createGame: gameId => {
    return api.post("/games", { gameId: parseInt(gameId) });
  }
};

export default {
  ...appInitApis,
  ...gameApis
};
