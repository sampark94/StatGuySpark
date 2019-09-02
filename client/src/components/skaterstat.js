import React, { Component } from 'react';

export default class Skater extends Component {
    render() {
        let { skater } = this.props
        return (
            <div>
                Name: {skater.player.FirstName} {skater.player.LastName}
                Jersey Number: {skater.player.JerseyNumber}


            </div>
        )
    }
}