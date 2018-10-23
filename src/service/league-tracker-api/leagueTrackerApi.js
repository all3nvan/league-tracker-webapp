import axios from "axios";

import config from "./config";
import { JSON_WEB_TOKEN } from "constants/localStorageKeys";

const api = axios.create({
  baseURL: config.getBaseUrl()
});

const appInitApis = {
  getSinglePageAppInitializations: () => {
    return api.get("/single_page_app_initializations");
  }
};

const adminTokenApis = {
  createAdminToken: (username, password) => {
    return api.post("/admin_token", {
      auth: { username, password }
    });
  }
};

const gameApis = {
  createGame: gameId => {
    const data = { gameId: parseInt(gameId) };
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(JSON_WEB_TOKEN)}`
    };
    return api.post("/games", data, { headers });
  }
};

export default {
  ...appInitApis,
  ...adminTokenApis,
  ...gameApis
};
