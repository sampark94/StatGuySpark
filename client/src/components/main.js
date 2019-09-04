import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import kucherov from "../assets/images/kucherov.png";
import ovie from "../assets/images/ovie.jpg";
import bishop from "../assets/images/bishop.jpg";
import vasil from "../assets/images/vasil1.png";
import arrow from "../assets/Icons/SVG/Icon-arrow-right.svg"
import Carousel from "./carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Select from 'react-select'

export default class Main extends Component {
    handleChange = (selectedOption) => {
        console.log(this.props);
        this.props.history.push(`/playerstats/individual/${selectedOption.value}`);
    }
    render() {
        let { stats } = this.props;
        let options = stats.map((stat) => {
            return { value: stat.player.ID, label: `${stat.player.FirstName} ${stat.player.LastName}` }
        })
        console.log(options)
        return (
            <div className="mainpagebody">
                <div className="herocontainer">
                    <div className="mainmessage"><h1>Welcome to StatGuySpark, the home to NHL Statistics</h1></div>
                    <div className="heromessage">Congratulations to 2019 Stanely Cup Champion, St Louis Blues!</div>
                    <div className="carousel"><Carousel /></div>
                </div>
                <div className="searchTitle"><h1>Player Search</h1></div>
                <div className="search"><Select
                    options={options} onChange={this.handleChange} placeholder={'Search'} /></div>

                <div className="cardheader"><h1>League Leaders</h1></div>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card__firstrow"><Link to="/playerstats/points">Points </Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={kucherov} alt=" " className="headshot" height="150px" width="150px" />
                        <div className="card__secondrow">#86 | Nikita Kucherov</div>
                        <div className="card__thirdrow">Tampa Bay Lightning | RW</div>
                        <div className="card__fourthrow">POINTS</div>
                        <div className="card__fifthrow">128</div>
                    </div>
                    <div className="card">
                        <div className="card__firstrow"><Link to="/playerstats/goals">Goals</Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={ovie} alt=" " className="headshot" height="150px" width="150px" />
                        <div className="card__secondrow">#8 | Alex Ovechkin</div>
                        <div className="card__thirdrow">Washington Capitals | LW</div>
                        <div className="card__fourthrow">GOALS</div>
                        <div className="card__fifthrow">51</div>
                    </div>
                    <div className="card">
                        <div className="card__firstrow"><Link to="/goaliestats/wins">Wins</Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={vasil} alt=" " className="headshot" height="150px" width="150px" />
                        <div className="card__secondrow">#88 | Andrei Vasilevkiy</div>
                        <div className="card__thirdrow">Tampa Bay Lightning | G</div>
                        <div className="card__fourthrow">WINS</div>
                        <div className="card__fifthrow">39</div>
                    </div>
                    <div className="card">
                        <div className="card__firstrow"><Link to="/goaliestats/saves">Saves</Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={bishop} alt=" " className="headshot" height="150px" width="150px" />
                        <div className="card__secondrow">#30 | Ben Bishop</div>
                        <div className="card__thirdrow">Dallas Stars | RW</div>
                        <div className="card__fourthrow">SAVE %</div>
                        <div className="card__fifthrow">0.944</div>
                    </div >
                </div >
            </div >

        )
    }
}