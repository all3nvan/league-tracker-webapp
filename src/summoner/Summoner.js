import React, { Component } from "react";

import "./Summoner.scss";
import ChampionAvatar from "components/ChampionAvatar";

class Summoner extends Component {
  // TODO: this definitely needs to be unit tested
  aggregateChampionStats = () => {
    const { gameParticipants } = this.props;
    const statsByChampId = gameParticipants.reduce(
      (statsByChampId, participant) => {
        const { championId, win, kills, deaths, assists } = participant;

        if (!statsByChampId[championId]) {
          statsByChampId[championId] = {
            championId,
            games: 0,
            wins: 0,
            losses: 0,
            kills: 0,
            deaths: 0,
            assists: 0
          };
        }

        statsByChampId[championId].games += 1;
        statsByChampId[championId].wins += win ? 1 : 0;
        statsByChampId[championId].losses += win ? 0 : 1;
        statsByChampId[championId].kills += kills;
        statsByChampId[championId].deaths += deaths;
        statsByChampId[championId].assists += assists;

        return statsByChampId;
      },
      {}
    );

    return Object.values(statsByChampId).map(champ => {
      const deaths = champ.deaths === 0 ? 1 : champ.deaths;
      const kda = ((champ.kills + champ.assists) / deaths).toFixed(1);
      const winrate = ((champ.wins / champ.games) * 100).toFixed(1);
      const avgKills = (champ.kills / champ.games).toFixed(1);
      const avgDeaths = (champ.deaths / champ.games).toFixed(1);
      const avgAssists = (champ.assists / champ.games).toFixed(1);

      return {
        ...champ,
        kda,
        winrate,
        avgKills,
        avgDeaths,
        avgAssists
      };
    });
  };

  render() {
    const { summoner, gameParticipants } = this.props;

    if (!summoner || !gameParticipants || gameParticipants.length === 0) {
      return null;
    }

    const aggregatedChampionStats = this.aggregateChampionStats();
    aggregatedChampionStats.sort((a, b) => b.games - a.games);
    aggregatedChampionStats.sort((a, b) => b.winrate - a.winrate);

    const championStatRowItem = aggregatedChampionStats.map((champion, i) => {
      return (
        <tr key={champion.championId}>
          <td>{i + 1}</td>
          <td>
            <div className="summoner__table__champion">
              <ChampionAvatar championId={champion.championId} />
            </div>
          </td>
          <td>
            {champion.avgKills} / {champion.avgDeaths} / {champion.avgAssists} (
            {champion.kda})
          </td>
          <td>{champion.wins}</td>
          <td>{champion.losses}</td>
          <td>{champion.winrate}%</td>
        </tr>
      );
    });

    return (
      <>
        <h1>{this.props.summoner.name}</h1>
        <div className="summoner">
          <table className="summoner__table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Champion</th>
                <th>KDA</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Winrate</th>
              </tr>
            </thead>
            <tbody>{championStatRowItem}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Summoner;
