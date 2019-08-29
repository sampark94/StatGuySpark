import React, { Component } from "react";


export default class PStats extends Component {

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
                        <th>G</th>
                        <th>A</th>
                        <th>
                            <button onClick={() => this.props.sortBy("Points")}>P</button>
                        </th>
                        <th>PIM</th>
                        <th>+/-</th>
                    </tr>
                    <PlayerStats stats={stats} />
                </tbody>
            </table>
        );
    }
}

const PlayerStats = ({ stats }) => {
    const PlayerStatsList = stats.filter(allPlayers => allPlayers.player.Position !== "G").map(player => {
        return (
            <tr>
                <td>{player.player.FirstName} {player.player.LastName}</td>
                <td>{player.team.Abbreviation}</td>
                <td>{player.player.Position}</td>
                <td>{player.stats.GamesPlayed['#text']}</td>
                <td>{player.stats.stats.Goals['#text']}</td>
                <td>{player.stats.stats.Assists['#text']}</td>
                <td>{player.stats.stats.Points['#text']}</td>
                <td>{player.stats.stats.PenaltyMinutes['#text']}</td>
                <td>{player.stats.stats.hasOwnProperty('PlusMinus') ? player.stats.stats.PlusMinus['#text'] : ''}</td>
                <td></td>
            </tr>
        )
    })
    return <div>{PlayerStatsList}</div>;
}