import React, { Component } from 'react';
import OptinSummary from "./OptinSummary";
import '../../scss/air-traffic-control/OptinTable.scss'
import {optinsData} from "../../data/optins";

class OptinTable extends Component {

    constructor(props) {
        super(props);

        this.state = {optinsData: optinsData};
    }

    setOptins = () => {

        return this.state['optinsData'].map(optin => {

            return <OptinSummary id={optin.id}
                                 name={optin.name}
                                 icon={optin.icon}
                                 deadline={optin.deadline}
                                 limitPercentage={optin.limitPercentage}
                                 hasFacebook={optin.hasFacebook}
                                 hasTap={optin.hasTap}
                                 key={optin.id}/> })
    }

    render () {
        return (
            <table className="air-traffic-control__optin-table">
                <tbody>
                    <tr>
                        <th>Optin Name</th>
                        <th>Deadline</th>
                        <th>FB</th>
                        <th>&</th>
                        <th>TAP</th>
                        <th></th>
                        <th></th>
                    </tr>

                    {this.setOptins()}
                </tbody>
            </table>
        )
    }
}

export default OptinTable;