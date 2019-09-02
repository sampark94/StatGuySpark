import React, { Component } from 'react';
import headshot from "../assets/images/kucherov.png";

export default class Skater extends Component {
    render() {
        let { skater } = this.props
        return (
            <div>
                <div className="playerpageheader">
                    <img src={headshot} width='200px' height='200px' className="headshot" alt="headshot" />
                    <h2 className="infoFirst">{skater.player.FirstName} {skater.player.LastName} | #{skater.player.JerseyNumber}</h2>
                    <div className="infoSecond">{skater.player.Position} | {skater.player.Height} | {skater.player.Weight} lb | Age: {skater.player.Age} | {skater.team.City} {skater.team.Name}</div>
                </div>
                <div className="playerpage">
                    <div className="personalinfo">
                        <div><h4>{skater.player.FirstName} {skater.player.LastName}</h4></div>
                        <div className="personaldetail"><h4>Born: </h4> {skater.player.BirthDate}</div>
                        <div className="personaldetail"><h4>Birthplace: </h4> {skater.player.BirthCity}, {skater.player.BirthCountry}</div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="season">Season</th>
                                <th className="tableEntry">GP</th>
                                <th className="tableEntry">G</th>
                                <th className="tableEntry">A</th>
                                <th className="tableEntry">P</th>
                                <th className="tableEntry">+/-</th>
                                <th className="tableEntry">PIM</th>
                                <th className="tableEntry">PPG</th>
                                <th className="tableEntry">PPP</th>
                                <th className="tableEntry">SHG</th>
                                <th className="tableEntry">SHP</th>
                                <th className="tableEntry">GWG</th>
                                <th className="tableEntry">S</th>
                                <th className="tableEntry">S%</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="season">2018-2019</td>
                                <td className="tableEntry">{skater.stats.GamesPlayed['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.Goals['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.Assists['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.Points['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.PlusMinus['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.PenaltyMinutes['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.PowerplayGoals['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.PowerplayPoints['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.ShorthandedGoals['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.ShorthandedPoints['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.GameWinningGoals['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.Shots['#text']}</td>
                                <td className="tableEntry">{skater.stats.stats.ShotPercentage['#text']}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}