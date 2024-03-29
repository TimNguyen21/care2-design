import React, { Component } from 'react';
import MainNav from './MainNav'
import ElectronContainer from './ElectronContainer'
import CreateFlowContainer from "./CreateFlowContainer";
import AirTrafficControlContainer from "./AirTrafficControl";
import { Route, Switch } from "react-router-dom";
import '../scss/container/App.scss';

class App extends Component {

  render() {
    return(
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <MainNav />
                    }}
                />
                <Route
                    path="/electron"
                    render={() => {
                        return <ElectronContainer />
                    }}
                />
                <Route
                    path="/create-flow"
                    render={() => {
                        return <CreateFlowContainer />
                    }}
                />
                <Route
                    path="/air-traffic-control"
                    render={() => {
                        return <AirTrafficControlContainer />
                    }}
                />
            </Switch>
        </main>
    )
  }
}

export default App;
