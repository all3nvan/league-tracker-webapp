import React from "react";
import ReactDOM from "react-dom";
import LeagueTrackerWebapp from "LeagueTrackerWebapp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LeagueTrackerWebapp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
