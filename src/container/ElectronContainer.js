import React, { Component } from 'react';
import Header from '../components/electron/Header'
import Nav from '../components/electron/Nav'
import Login from '../components/electron/Login'
import Entry from '../components/electron/Entry'
import Summary from '../components/electron/Summary'
import Confirmation from '../components/electron/Confirmation'
import { Route, Switch, Link } from "react-router-dom";
import '../scss/container/ElectronContainer.scss';

const ElectronContainer = () => {
    return (
        <main>
            <header>
                <Link to={'/'}>
                    <button class="main-home-button">Main Home</button>
                </Link>
            </header>

            <Nav />
            <Header />
            <Switch>
                <Route
                    path="/electron/login"
                    render={() => {
                        return <Login />
                    }}
                />
                <Route
                    path="/electron/entry"
                    render={() => {
                        return <Entry />
                    }}
                />
                <Route
                    path="/electron/summary"
                    render={() => {
                        return <Summary />
                    }}
                />
                <Route
                    path="/electron/confirmation"
                    render={() => {
                        return <Confirmation />
                    }}
                />
            </Switch>
        </main>
    )
}

export default ElectronContainer;