import React, { Component } from 'react';
import OptinSummary from "./OptinSummary";
import '../../scss/air-traffic-control/NearCompletion.scss'
import {optinsData} from "../../data/optins";

class NearCompletion extends Component {

    constructor() {
        super();

        this.optinsData = optinsData;
    }

    setOptins = () => {
        return optinsData.map(optin => {

            return <OptinSummary id={optin.id}
                                 name={optin.name}
                                 deadline={optin.deadline}
                                 key={optin.id}/>
        })
    }

    render () {
        return (
            <table className="air-traffic-control--near-completion">
                <tbody>
                    <tr>
                        <th>Optin Name</th>
                        <th></th>
                        <th>Deadline</th>
                        <th>FB & TAP</th>
                        <th>Status Bar</th>
                        <th></th>
                    </tr>
                    {this.setOptins()}
                </tbody>
            </table>
        )
    }
}

export default NearCompletion;