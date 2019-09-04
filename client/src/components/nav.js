import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

export default class Navbar extends Component {
    render() {
        return (<nav className="nav">
            <div className="nav__logo">
                <Link to="/">
                    StatGuySpark <img src={logo} alt="" width="30px" height="30px" />
                </Link>
            </div>
            <div className="nav__options">
                <div className="nav__pages">
                    <NavLink
                        to="/playerstats/points"
                        activeStyle={{ borderBottom: "white 6px solid" }}
                    >
                        Points Leader
          </NavLink>
                </div>
                <div className="nav__pages">
                    <NavLink
                        to="/playerstats/goals"
                        activeStyle={{ borderBottom: "white 6px solid" }}
                    >
                        Goals Leader
            </NavLink>
                </div>
                <div className="nav__pages">
                    <NavLink
                        to="/goaliestats/wins"
                        activeStyle={{ borderBottom: "white 6px solid" }}
                    >
                        Wins Leader
            </NavLink>
                </div>
                <div className="nav__pages">
                    <NavLink
                        to="/goaliestats/saves"
                        activeStyle={{ borderBottom: "white 6px solid" }}
                    >
                        Saves Leader
            </NavLink>
                </div>
                <div className="nav__pages">
                    <NavLink
                        to="/standings"
                        activeStyle={{ borderBottom: "white 6px solid" }}
                    >
                        Standings
            </NavLink>
                </div>
            </div>
        </nav>)
    }
}