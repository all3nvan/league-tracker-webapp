import leagueTrackerApi from "service/league-tracker-api/leagueTrackerApi";

export const generateTeams = summonerIds => {
  return dispatch => {
    return (
      leagueTrackerApi
        .generateTeams(summonerIds)
        .then(response => response.data.teamCombinations)
        // TODO
        .catch(error => {
          console.log(error.response);
          throw error;
        })
    );
  };
};
