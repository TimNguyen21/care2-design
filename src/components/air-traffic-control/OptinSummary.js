import React from 'react';
import StatusBar from "./StatusBar";
import '../../scss/air-traffic-control/OptinSummary.scss'
import facebookIcon  from "../../images/air-traffic-control/facebook.png";
import tapIcon from "../../images/air-traffic-control/tap.png";

const OptinSummary = (props) => {

    return (
        <tr className="air-traffic-control__optin-summary">
            <td className="air-traffic-control__optin-summary--info">
                <img className="air-traffic-control__optin-summary--icon" src={props.icon}/>
                <label className="air-traffic-control__optin-summary--name">{props.name}</label>
            </td>
            <td>{props.deadline}</td>
            <td>
                <img className="air-traffic-control__optin-summary--facebook-icon" src={facebookIcon} hidden={!props.hasFacebook}/>
            </td>
            <td></td>
            <td>
                <img className="air-traffic-control__optin-summary--tap-icon" src={tapIcon} hidden={!props.hasTap}/>
            </td>
            <td>
                <StatusBar limitPercentage={props.limitPercentage}/>
            </td>
            <td onClick={() => {console.log(`Edit Options ${props.id}`)}}>
                <div className="air-traffic-control__optin-summary--edit-options">...</div>
            </td>
        </tr>
    )
}

export default OptinSummary;