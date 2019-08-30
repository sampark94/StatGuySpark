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
        accessor: 'stats.GamesPlayed.#text' // String-based value accessors!
    }, {
        Header: 'W',
        accessor: 'stats.stats.Wins.#text' // String-based value accessors!
    }, {
        Header: 'L',
        accessor: 'stats.stats.Losses.#text',
    }, {
        Header: 'OT',
        accessor: 'stats.stats.OvertimeWins.#text',
    }, {
        Header: 'Points',
        accessor: 'stats.stats.Points.#text',
    }, {
        Header: 'GF',
        accessor: 'stats.stats.GoalsFor.#text',
    }, {
        Header: 'GA',
        accessor: 'stats.stats.GoalsAgainst.#text',
    }
]

export default class Standings extends Component {
    render() {
        let { standings } = this.props;
        return (
            <div>
                <h1>Hello Standings</h1>
                <ReactTable
                    data={standings}
                    columns={columns}></ReactTable>
            </div>
        )
    }
}