import React, { Component } from "react";

class Rankings extends Component {
  componentDidMount = () => {
    this.props.fetchRankings();
  };

  render() {
    return <></>;
  }
}

export default Rankings;
