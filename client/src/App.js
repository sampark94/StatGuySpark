import React, { Component } from 'react';
import PStatsNew from "./components/PStatsNew";
import Standings from "./components/Standings";
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
            path={"/playerstats"}
            exact
            render={() => {
              return (
                <PStatsNew
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