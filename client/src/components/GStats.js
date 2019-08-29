import React, { Component } from "react";


export default class GStats extends Component {

    render() {
        let { stats } = this.props;
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Pos</th>
                        <th>Gp</th>
                        <th>
                            W</th>
                        <th>L</th>
                        <th>
                            OT
                        </th>
                        <th>Svs</th>
                        <th>Ga</th>
                    </tr>
                    <GoalieStats stats={stats} />
                </tbody>
            </table >
        );
    }
}

const GoalieStats = ({ stats }) => {
    const GoalieStatsList = stats.filter(allPlayers => allPlayers.player.Position === "G").map(player => {
        return (
            <tr>
                <td>{player.player.FirstName} {player.player.LastName}</td>
                <td>{player.team.Abbreviation}</td>
                <td>{player.player.Position}</td>
                <td>{player.stats.GamesPlayed['#text']}</td>
                <td>{player.stats.stats.Wins['#text']}</td>
                <td>{player.stats.stats.Losses['#text']}</td>
                <td>{player.stats.stats.OvertimeLosses['#text']}</td>
                <td>{player.stats.stats.Saves['#text']}</td>
                <td>{player.stats.stats.GoalsAgainst['#text']}</td>
                <td></td>
            </tr>
        )
    })
    return <div>{GoalieStatsList}</div>;
}