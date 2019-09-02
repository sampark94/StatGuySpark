import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>This is the Main Page</h1>
                <div>Here is the Hero</div>
                <Link to="/playerstats/points">Points Leader</Link><br />
                <Link to="/playerstats/goals">Goals Leader </Link><br />
                <Link to="/goaliestats/wins">Goalie Wins Leader</Link><br />
                <Link to="/goaliestats/saves">Goalie Saves Leader</Link><br />
                <Link to="/standings">Standings</Link><br />
            </div>

        )
    }
}