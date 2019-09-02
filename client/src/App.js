import React, { Component } from 'react';
import PlayerPoints from "./components/PpointsLeader";
import PlayerGoals from "./components/PgoalsLeader";
import Standings from "./components/Standings";
import GoalieWins from "./components/GwinsLeader";
import GoalieSaves from "./components/GsaveLeader";
import Goalie from "./components/goaliestat";
import Skater from "./components/skaterstat";
import Main from "./components/main";
import Navbar from "./components/nav";
import 'react-table/react-table.css';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";

import "./styles/main.css";

export default class App extends Component {
  state = {
    stats: [],
    standings: [],
    isLoading: true,
  };

  componentDidMount() {
    this.retrieveInfo();
  }
  retrieveInfo = () => {
    axios.all(
      [
        axios.get("http://localhost:8080/stats").then(response => {
          this.setState({
            stats: response.data
          });
        })
      ],

      [
        axios.get("http://localhost:8080/standings").then(response => {
          this.setState({
            standings: response.data,
          });
        })
      ]
    );
  };

  render() {

    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path={"/"}
            exact
            render={() => {
              return (
                <Main
                />
              );
            }}
          />
          <Route
            path={"/playerstats/points"}
            exact
            render={(props) => {
              return (
                <PlayerPoints
                  stats={this.state.stats}
                  {...props}
                />
              );
            }}
          />
          <Route
            path={"/playerstats/goals"}
            exact
            render={(props) => {
              return (
                <PlayerGoals
                  stats={this.state.stats}
                  {...props}
                />
              );
            }}
          />
          <Route
            path={"/playerstats/individual/:id"}
            exact
            render={props => {
              const skater = this.state.stats.find(player => {
                return props.match.params.id === player.player.ID
              });
              return skater === undefined ? (
                <h1>Can't Find Item</h1>
              ) : (
                  <Skater
                    skater={skater}
                  />
                );
            }}
          />
          <Route
            path={"/goaliestats/wins"}
            exact
            render={(props) => {
              return (
                <GoalieWins
                  stats={this.state.stats}
                  {...props}
                />
              );
            }}
          />
          <Route
            path={"/goaliestats/individual/:id"}
            exact
            render={props => {
              const goalie = this.state.stats.find(player => {
                return props.match.params.id === player.player.ID
              });
              return goalie === undefined ? (
                <h1>Can't Find Item</h1>
              ) : (
                  <Goalie
                    goalie={goalie}
                  />
                );
            }}
          />
          <Route
            path={"/goaliestats/saves"}
            exact
            render={(props) => {
              return (
                <GoalieSaves
                  stats={this.state.stats}
                  {...props}
                />
              );
            }}
          />
          <Route
            path={"/standings"}
            exact
            render={(props) => {
              return (
                <Standings
                  standings={this.state.standings}
                  {...props}
                />
              );
            }}
          />
          {/* <Route
            path={"/standings/team/:id"}
            exact
            render={props => {
              const team = this.state.stats.find(team => {
                return props.match.params.id === team.team.ID
              });
              return team === undefined ? (
                <h1>Can't Find Item</h1>
              ) : (
                  <Team
                    team={team}
                  />
                );
            }}
          /> */}

        </Switch>
      </div>
    )
  }
}