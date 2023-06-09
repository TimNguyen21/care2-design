import React from 'react';
import '../../scss/air-traffic-control/CountriesSummaryCard.scss'

const CountriesSummaryCard = (props) => {
    return (
        <section className="countries-summary-card">
            <label className="countries-summary-card__header">{props.label}</label>
            <div className="countries-summary-card__content">
                <div className="countries-summary-card__US">
                    <label>US</label>
                    <label className="countries-summary-card__US-value">{props.USValue}</label>
                    <label className="countries-summary-card__US-link">View</label>
                </div>
                <div className="countries-summary-card__non-US">
                    <label>Non-US</label>
                    <label className="countries-summary-card__non-US-value">{props.nonUSValue}</label>
                    <label className="countries-summary-card__non-US-link">View</label>
                </div>
            </div>
        </section>
    )
}

export default CountriesSummaryCard;