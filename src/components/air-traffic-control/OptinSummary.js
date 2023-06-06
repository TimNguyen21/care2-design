import React from 'react';
import '../../scss/air-traffic-control/OptinSummary.scss'

const OptinSummary = (props) => {

    return (
        <tr className="air-traffic-control--optin-summary">
            <td>img</td>
            <td>{props.name}</td>
            <td>{props.deadline}</td>
            <td>FB & TAP</td>
            <td>Status Bar</td>
            <td onClick={() => {console.log(`Edit Options ${props.id}`)}}>...</td>
        </tr>
    )
}

export default OptinSummary;