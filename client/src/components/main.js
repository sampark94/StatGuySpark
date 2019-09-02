import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/stlouisblues_61386572_687300375052436_7552122644091693135_n.jpg';
import image2 from "../assets/images/stlouisblues_61440214_120717185566158_626492606581888104_n.jpg";
import image3 from "../assets/images/stlouisblues_61550320_544834692713444_2623402794666407211_n.jpg";
import image4 from "../assets/images/stlouisblues_61618404_1131795047014694_5491764171070309541_n.jpg";
import image5 from "../assets/images/stlouisblues_61768634_2093281330800804_6548961981970354633_n.jpg";










export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>This is the Main Page</h1>
                <div>Here is the Hero</div>
                <img src={image1} width='150px' height='150px' />

                <Link to="/playerstats/points">Points Leader</Link><br />
                <Link to="/playerstats/goals">Goals Leader </Link><br />
                <Link to="/goaliestats/wins">Goalie Wins Leader</Link><br />
                <Link to="/goaliestats/saves">Goalie Saves Leader</Link><br />
                <Link to="/standings">Standings</Link><br />
            </div>

        )
    }
}