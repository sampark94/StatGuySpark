import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>This is the Main Page</h1>
                <button><Link to="/playerstats">Player Stats
                </Link></button>
                <button><Link to="/standings">Standings
                </Link></button>
            </div>

        )
    }
}