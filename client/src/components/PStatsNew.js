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
    accessor: 'stats.GamesPlayed.#text',
}, {
    Header: 'G',
    accessor: 'stats.stats.Goals.#text',
}, {
    Header: 'A',
    accessor: 'stats.stats.Assists.#text',
}, {
    Header: 'P',
    id: "points",
    accessor: d => d.stats.stats.Points['#text'],
    sortMethod: (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }
        return b - a;
    }

}, {
    Header: '+/-',
    accessor: 'stats.stats.PlusMinus.#text',
}, {
    Header: 'PIM',
    accessor: 'stats.stats.PenaltyMinutes.#text',
},]

export default class PStatsNew extends Component {
    render() {
        let { stats } = this.props;
        return (
            <div>
                <h1>Hello PStatsNew</h1>
                <ReactTable
                    data={stats}
                    columns={columns}
                    defaultSorted={[
                        {
                            id: "points",
                            desc: false
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                ></ReactTable>

            </div>
        )
    }
}