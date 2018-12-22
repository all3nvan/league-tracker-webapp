import React, { Component } from "react";

import "./Rankings.scss";

class Rankings extends Component {
  componentDidMount = () => {
    this.props.fetchRankings();
  };

  render() {
    const { orderedRankings, summonersById } = this.props;

    if (!orderedRankings || orderedRankings.length === 0 || !summonersById) {
      return null;
    }

    const rankingTableRowItems = orderedRankings.map((ranking, i) => {
      const summonerName = summonersById[ranking.summonerId]
        ? summonersById[ranking.summonerId].name
        : ranking.summonerId;
      return (
        <tr key={ranking.summonerId}>
          <td>{i + 1}</td>
          <td>{summonerName}</td>
          <td>{ranking.wins}</td>
          <td>{ranking.losses}</td>
          <td>{ranking.rating.toFixed(2)}</td>
        </tr>
      );
    });

    return (
      <div className="rankings">
        <table className="rankings__table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>{rankingTableRowItems}</tbody>
        </table>
      </div>
    );
  }
}

export default Rankings;
