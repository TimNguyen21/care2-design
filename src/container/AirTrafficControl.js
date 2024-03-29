import React from 'react';
import Nav from '../components/air-traffic-control/Nav'
import OptinTable from "../components/air-traffic-control/OptinTable";
import FilterForm from "../components/air-traffic-control/FilterForm";
import CountriesSummaryCard from "../components/air-traffic-control/CountriesSummaryCard";
import AtRisk from "../components/air-traffic-control/AtRisk";
import AtRiskV2 from "../components/air-traffic-control/AtRiskV2";
import { Route, Switch, Link } from "react-router-dom";
import '../scss/container/AirTrafficControl.scss';

import {optinsData} from "../data/optins";

const AirTrafficControlContainer = () => {

    return (
        <main>
            <header className='main-home-nav'>
                <Link to={'/'}>
                    <button className="main-home-button">Care2 Design Home</button>
                </Link>
            </header>

            <Nav />

            <Switch>
                <Route
                    path="/air-traffic-control/optin-table"
                    render={() => {
                        return <OptinTable optins={optinsData} />
                    }}
                />
                <Route
                    path="/air-traffic-control/at-risk"
                    render={() => {
                        return <AtRisk />
                    }}
                />
                <Route
                    path="/air-traffic-control/countries-summary"
                    render={() => {
                        return <CountriesSummaryCard label='Air Traffic' USValue={90} nonUSValue={50}/>
                    }}
                />
                <Route
                    path="/air-traffic-control/filter-form"
                    render={() => {
                        return <FilterForm />
                    }}
                />
                <Route
                    path="/air-traffic-control"
                    render={() => {
                        return <section>
                            <OptinTable optins={optinsData} />
                            <FilterForm />
                            <CountriesSummaryCard label='Air Traffic' USValue={80} nonUSValue={150}/>
                        </section>
                    }}
                />
            </Switch>
        </main>
    )
}

export default AirTrafficControlContainer;