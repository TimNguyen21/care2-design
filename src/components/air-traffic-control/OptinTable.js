import React, { Component } from 'react';
import OptinSummary from "./OptinSummary";
import '../../scss/air-traffic-control/OptinTable.scss'

const OptinTable = (props) => {

    const optins = props.optins ? props.optins.map(optin => (
        <OptinSummary id={optin.id}
                      name={optin.name}
                      icon={optin.icon}
                      deadline={optin.deadline}
                      limitPercentage={optin.limitPercentage}
                      hasFacebook={optin.hasFacebook}
                      hasTap={optin.hasTap}
                      key={optin.id}/>
    )) : [];

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
            { optins }
            </tbody>
        </table>
    )
}

export default OptinTable;