import React, { Component } from "react";


export default class Stats extends Component {

    render() {
        console.log(this.props.stats);
        let { stats } = this.props;
        return (
            <div><AllStats stats={stats} /></div>
        );
    }
}

const AllStats = ({ stats }) => {
    const allStatsList = stats.map(player => {
        return (
            <div>
                <h1>{player.player.FirstName}</h1>
                <h2>{player.player.LastName}</h2>
            </div>
        )
    })
    return <div>{allStatsList}</div>;
}