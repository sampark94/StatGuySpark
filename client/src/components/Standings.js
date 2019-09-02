import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const columns = [
    {
        Header: 'City',
        accessor: 'team.City' // String-based value accessors!
    },
    {
        Header: 'Team Name',
        accessor: 'team.Name' // String-based value accessors!
    }, {
        Header: 'GP',
        id: "GP",
        accessor: d => d.stats.GamesPlayed['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        } // String-based value accessors!
    }, {
        Header: 'W',
        id: "W",
        accessor: d => d.stats.stats.Wins['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        } // String-based value accessors!
    }, {
        Header: 'L',
        id: "L",
        accessor: d => d.stats.stats.Losses['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        }
    }, {
        Header: 'OT',
        id: "OT",
        accessor: d => d.stats.stats.OvertimeWins['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        }
    }, {
        Header: 'Points',
        id: "points",
        accessor: d => d.stats.stats.Points['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        },
    }, {
        Header: 'GF',
        id: "GF",
        accessor: d => d.stats.stats.GoalsFor['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        }
    }, {
        Header: 'GA',
        id: "GA",
        accessor: d => d.stats.stats.GoalsAgainst['#text'],
        sortMethod: (a, b) => {
            if (isNaN(a) || isNaN(b)) {
                return a > b ? 1 : -1;
            }
            return b - a;
        }
    }
]

export default class Standings extends Component {
    render() {
        let { standings } = this.props;
        return (
            <div>
                <h1>Overall Standings</h1>
                <ReactTable
                    data={standings}
                    columns={columns}
                    defaultSorted={[
                        {
                            id: "points",
                            desc: false
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                    getTrProps={(state, rowInfo) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                this.props.history.push(`/standings/team/${rowInfo.original.team.ID}`)
                            }
                        }
                    }
                    }>
                </ReactTable>
            </div>
        )
    }
}