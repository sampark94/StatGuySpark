import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const columns = [{
    Header: 'First Name',
    accessor: 'player.FirstName' // String-based value accessors!
}, {
    Header: 'Last Name',
    accessor: 'player.LastName' // String-based value accessors!
}, {
    Header: 'Team',
    accessor: 'team.Abbreviation',
}, {
    Header: 'Pos',
    accessor: 'player.Position',
}, {
    Header: 'GP',
    id: "GP",
    accessor: d => d.stats.GamesPlayed['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
}, {
    Header: 'W',
    id: "W",
    accessor: d => d.stats.stats.Wins['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
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
    accessor: d => d.stats.stats.OvertimeLosses['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }

}, {
    Header: 'Svs',
    id: "Svs",
    accessor: d => d.stats.stats.Saves['#text'],
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
}, {
    Header: 'Sv%',
    id: "Sv%",
    accessor: d => d.stats.stats.SavePercentage['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
}, {
    Header: 'SO',
    id: "SO",
    accessor: d => d.stats.stats.Shutouts['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
},]

export default class GoalieWins extends Component {
    render() {
        let { stats } = this.props;
        const goalies = stats.filter(allPlayers => allPlayers.player.Position === "G");
        return (
            <div>
                <h1>Wins Leader</h1>
                <ReactTable
                    data={goalies}
                    columns={columns}
                    defaultSorted={[
                        {
                            id: "W",
                            desc: false
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                    getTrProps={(state, rowInfo) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                this.props.history.push(`/goaliestats/individual/${rowInfo.original.player.ID}`)
                            }
                        }
                    }
                    }
                ></ReactTable>

            </div>
        )
    }
}