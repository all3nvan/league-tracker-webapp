export default {
  getBaseUrl: () => {
    switch (process.env.NODE_ENV) {
      default:
        return "https://league-tracker-api-stage.herokuapp.com/";
    }
  }
};
