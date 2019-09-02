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
    Header: 'G',
    id: "G",
    accessor: d => d.stats.stats.Goals['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
}, {
    Header: 'A',
    id: "A",
    accessor: d => d.stats.stats.Assists['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
}, {
    Header: 'P',
    id: "P",
    accessor: d => d.stats.stats.Points['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }

}, {
    Header: '+/-',
    id: "+/-",
    accessor: d => d.stats.stats.PlusMinus['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
}, {
    Header: 'PIM',
    id: "PIM",
    accessor: d => d.stats.stats.PenaltyMinutes['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }
},]

export default class PlayerPoints extends Component {
    render() {
        let { stats } = this.props;
        const skaters = stats.filter(allPlayers => allPlayers.player.Position !== "G");
        return (
            <div>
                <h1 className="pageHeader">Points Leader</h1>
                <ReactTable
                    data={skaters}
                    columns={columns}
                    defaultSorted={[
                        {
                            id: "P",
                            desc: false
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                    getTrProps={(state, rowInfo) => {
                        return {
                            onClick: (e, handleOriginal) => {
                                this.props.history.push(`/playerstats/individual/${rowInfo.original.player.ID}`)
                            }
                        }
                    }
                    }
                ></ReactTable>

            </div>
        )
    }
}