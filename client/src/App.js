import React, { Component } from 'react';
import PlayerPoints from "./components/PpointsLeader";
import PlayerGoals from "./components/PgoalsLeader";
import Standings from "./components/Standings";
import GoalieWins from "./components/GwinsLeader";
import GoalieSaves from "./components/GsaveLeader";
import Goalie from "./components/goaliestat"
import Main from "./components/main"
import 'react-table/react-table.css';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    stats: [],
    standings: [],
    isDirectionAsc: false,
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

  sortBy = (key) => {
    const sortedStats = this.state.stats.sort((statOne, statTwo) => {
      return this.state.isDirectionAsc ? statOne.stats.stats[key]["#text"] - statTwo.stats.stats[key]["#text"] : statTwo.stats.stats[key]["#text"] - statOne.stats.stats[key]["#text"]
    })
    this.setState({
      stats: sortedStats,
      isDirectionAsc: !this.state.isDirectionAsc
    })
  }

  render() {

    return (
      <div>
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
            render={() => {
              return (
                <PlayerPoints
                  stats={this.state.stats}
                />
              );
            }}
          />
          <Route
            path={"/playerstats/goals"}
            exact
            render={() => {
              return (
                <PlayerGoals
                  stats={this.state.stats}
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
            path={"/goaliestats/wins/:id"}
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
            render={() => {
              return (
                <GoalieSaves
                  stats={this.state.stats}
                />
              );
            }}
          />
          <Route
            path={"/standings"}
            exact
            render={() => {
              return (
                <Standings
                  standings={this.state.standings}
                />
              );
            }}
          />

        </Switch>
      </div>
    )
  }
}