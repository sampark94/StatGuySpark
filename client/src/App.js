import React, { Component } from 'react';
import Stats from './components/stats'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    stats: [],
    isDirectionAsc: false,
    isLoading: true,
    playerStats: []
  };

  componentDidMount() {
    this.retrieveInfo();
  }

  retrieveInfo = () => {
    axios.get("http://localhost:8080/stats").then(response => {
      this.setState({
        stats: response.data,
      })
    });
  }

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
        <div>Hello World</div>
        <Stats stats={this.state.stats} sortBy={this.sortBy} playerStats={this.state.playerStats} />
      </div>
    )
  }
}