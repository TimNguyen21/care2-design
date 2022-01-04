import React, { Component } from 'react';
import Nav from '../components/create-flow/Nav'
import StartUp from "../components/create-flow/StartUp";
import Tutorial from "../components/create-flow/Tutorial";
import Form from "../components/create-flow/Form";
import UploadImage from "../components/create-flow/UploadImage";
import { Route, Switch, Link } from "react-router-dom";
import '../scss/container/CreateFlowContainer.scss';

const CreateFlowContainer = () => {
    return (
        <main>
            <header>
                <Link to={'/'}>
                    <button class="main-home-button">Main Home</button>
                </Link>
            </header>

            <Nav />

            <Switch>
                <Route
                    path="/create-flow/start-page"
                    render={() => {
                        return <StartUp />
                    }}
                />
                <Route
                    path="/create-flow/tutorial"
                    render={() => {
                        return <Tutorial />
                    }}
                />
                <Route
                    path="/create-flow/form"
                    render={() => {
                        return <Form />
                    }}
                />
                <Route
                    path="/create-flow/upload-image"
                    render={() => {
                        return <UploadImage />
                    }}
                />
            </Switch>
        </main>
    )
}

export default CreateFlowContainer;