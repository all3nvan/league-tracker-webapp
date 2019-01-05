import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();

export default {
  getBaseUrl: () => env.REACT_APP_API_BASE_URL
};
