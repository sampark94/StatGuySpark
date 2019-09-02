import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/stlouisblues_61386572_687300375052436_7552122644091693135_n.jpg';
import image2 from "../assets/images/stlouisblues_61440214_120717185566158_626492606581888104_n.jpg";
import image3 from "../assets/images/stlouisblues_61550320_544834692713444_2623402794666407211_n.jpg";
import image4 from "../assets/images/stlouisblues_61618404_1131795047014694_5491764171070309541_n.jpg";
import image5 from "../assets/images/stlouisblues_61768634_2093281330800804_6548961981970354633_n.jpg";
import kucherov from "../assets/images/kucherov.png";
import ovie from "../assets/images/ovie.jpg";
import bishop from "../assets/images/bishop.jpg";
import vasil from "../assets/images/vasil1.png";
import arrow from "../assets/Icons/SVG/Icon-arrow-right.svg"









export default class Main extends Component {
    render() {
        return (
            <div className="mainpagebody">
                <div className="herocontainer">
                    <div className="mainmessage"><h1>Welcome to StatGuySpark, the home to NHL Statistics</h1></div>
                    <div className="heromessage">Congratulations to 2019 Stanely Cup Champion, St Louis Blues!</div>
                    <img src={image1} width='150px' height='150px' />
                </div>
                <div className="cardheader"><h1>League Leaders</h1></div>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card__firstrow"><Link to="/playerstats/points">Points </Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={kucherov} alt=" " className="headshot" height="150px" width="200px" />
                        <div>#86 | Nikita Kucherov</div>
                        <div>Tampa Bay Lightning | RW</div>
                        <div>POINTS</div>
                        <div>128</div>
                    </div>
                    <div className="card">
                        <div className="card__firstrow"><Link to="/playerstats/goals">Goals</Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={ovie} alt=" " className="headshot" height="150px" width="200px" />
                        <div>#8 | Alex Ovechkin</div>
                        <div>Washington Capitals | LW</div>
                        <div>GOALS</div>
                        <div>51</div>
                    </div>
                    <div className="card">
                        <div className="card__firstrow"><Link to="/goaliestats/wins">Wins</Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={vasil} alt=" " className="headshot" height="150px" width="200px" />
                        <div>#88 | Andrei Vasilevkiy</div>
                        <div>Tampa Bay Lightning | G</div>
                        <div>WINS</div>
                        <div>39</div>
                    </div>
                    <div className="card">
                        <div className="card__firstrow"><Link to="/goaliestats/saves">Saves</Link><img src={arrow} alt="" className="card__arrow" /></div>
                        <img src={bishop} alt=" " className="headshot" height="150px" width="200px" />
                        <div>#30 | Ben Bishop</div>
                        <div>Dallas Stars | RW</div>
                        <div>SAVE %</div>
                        <div>0.944</div>
                    </div >
                </div >
            </div >

        )
    }
}