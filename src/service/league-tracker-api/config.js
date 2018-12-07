export default {
  getBaseUrl: () => {
    switch (process.env.NODE_ENV) {
      case "stage":
        return "https://league-tracker-api-stage.herokuapp.com/";
      default:
        return "http://localhost:4000";
    }
  }
};
