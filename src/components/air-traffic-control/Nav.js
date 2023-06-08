import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/air-traffic-control/Nav.scss'

const Nav = () => {
    return (
        <section class="air-traffic-control-nav">
            <Link to={'/air-traffic-control'}>
                <button>Main</button>
            </Link>
            <Link to={'/air-traffic-control/optin-table'}>
                <button>Optin Table</button>
            </Link>
            <Link to={'/air-traffic-control/at-risk'}>
                <button>At Risk</button>
            </Link>
            <Link to={'/air-traffic-control/countries-summary'}>
                <button>Countries Summary</button>
            </Link>
        </section>
    )
}

export default Nav;