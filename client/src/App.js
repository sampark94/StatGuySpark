import React, { Component } from 'react';
import Stats from './components/stats'
import './App.css';
import axios from 'axios';

export default class App extends Component {
  state = {
    stats: [],
    isLoading: true
  };

  componentDidMount() {
    this.retrieveInfo();
  }

  retrieveInfo = () => {
    axios.get("http://localhost:8080/stats").then(response => {
      this.setState({
        stats: response.data
      })
    });
  }

  render() {

    return (
      <div>
        <div>Hello World</div>
        <Stats stats={this.state.stats} />
      </div>
    )
  }
}