export default {
  getBaseUrl: () => {
    switch (process.env.NODE_ENV) {
      default:
        return "http://localhost:4000";
    }
  }
};
