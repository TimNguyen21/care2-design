import React, { Component } from 'react';
import Nav from '../components/air-traffic-control/Nav'
import NearCompletion from "../components/air-traffic-control/NearCompletion";
import AtRisk from "../components/air-traffic-control/AtRisk";
import AtRiskV2 from "../components/air-traffic-control/AtRiskV2";
import { Route, Switch, Link } from "react-router-dom";
import '../scss/container/AirTrafficControl.scss';

const AirTrafficControlContainer = () => {
    return (
        <main>
            <header class='main-home-nav'>
                <Link to={'/'}>
                    <button class="main-home-button">Care2 Design Home</button>
                </Link>
            </header>

            <Nav />

            <Switch>
                <Route
                    path="/air-traffic-control/near-completion"
                    render={() => {
                        return <NearCompletion />
                    }}
                />
                <Route
                    path="/air-traffic-control/at-risk"
                    render={() => {
                        return <AtRisk />
                    }}
                />
                <Route
                    path="/air-traffic-control/at-risk-v2"
                    render={() => {
                        return <AtRiskV2 />
                    }}
                />
            </Switch>
        </main>
    )
}

export default AirTrafficControlContainer;