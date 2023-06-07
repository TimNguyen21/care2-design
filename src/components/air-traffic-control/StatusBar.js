import React from 'react';
import '../../scss/air-traffic-control/StatusBar.scss'

const StatusBar = (props) => {

    const currentLimitPercentage = props.limitPercentage;

    return (
        <section className="status-bar">
            <div className={`status-bar__current-progress ${currentLimitPercentage < 51 && 'status-bar__current-progress--at-risk'}`} style={{width: `${currentLimitPercentage}%`}}>-</div>
            <div className='status-bar__current-percentage'>{currentLimitPercentage}%</div>
        </section>
    )
}

export default StatusBar;