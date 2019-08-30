import React, { Component } from 'react';

export default class Goalie extends Component {
    render() {
        let { goalie } = this.props
        return (
            <div>
                Name: {goalie.player.FirstName} {goalie.player.LastName}
                Jersey Number: {goalie.player.JerseyNumber}


            </div>
        )
    }
}