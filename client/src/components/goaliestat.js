import React, { Component } from 'react';
import headshot from "../assets/images/vasil1.png"

export default class Goalie extends Component {
    render() {
        let { goalie } = this.props
        return (
            <div>
                <div className="playerpageheader">
                    <img src={headshot} width='200px' height='200px' className="headshot" alt="headshot" />
                    <h2 className="infoFirst">{goalie.player.FirstName} {goalie.player.LastName} | #{goalie.player.JerseyNumber}</h2>
                    <div className="infoSecond">{goalie.player.Position} | {goalie.player.Height} | {goalie.player.Weight} lb | Age: {goalie.player.Age} | {goalie.team.City} {goalie.team.Name}</div>
                </div>
                <div className="playerpage">
                    <div className="personalinfo">
                        <div><h4>{goalie.player.FirstName} {goalie.player.LastName}</h4></div>
                        <div className="personaldetail"><h4>Born: </h4> {goalie.player.BirthDate}</div>
                        <div className="personaldetail"><h4>Birthplace: </h4> {goalie.player.BirthCity}, {goalie.player.BirthCountry}</div>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="season">Season</th>
                                <th className="tableEntry">GP</th>
                                <th className="tableEntry">GS</th>
                                <th className="tableEntry">W</th>
                                <th className="tableEntry">L</th>
                                <th className="tableEntry">OTW</th>
                                <th className="tableEntry">OTL</th>
                                <th className="tableEntry">SA</th>
                                <th className="tableEntry">SV</th>
                                <th className="tableEntry">SV%</th>
                                <th className="tableEntry">GA</th>
                                <th className="tableEntry">GAA</th>
                                <th className="tableEntry">SO</th>
                                <th className="tableEntry">MIN</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="season">2018-2019</td>
                                <td className="tableEntry">{goalie.stats.GamesPlayed['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.GamesStarted['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.Wins['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.Losses['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.OvertimeWins['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.OvertimeLosses['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.ShotsAgainst['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.Saves['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.SavePercentage['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.GoalsAgainst['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.GoalsAgainstAverage['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.Shutouts['#text']}</td>
                                <td className="tableEntry">{goalie.stats.stats.MinutesPlayed['#text']}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}