import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/air-traffic-control/Nav.scss'

const Nav = () => {
    return (
        <section class="air-traffic-control-nav">
            <Link to={'/air-traffic-control/near-completion'}>
                <button>Near Completion</button>
            </Link>
            <Link to={'/air-traffic-control/at-risk'}>
                <button>At Risk</button>
            </Link>
            <Link to={'/air-traffic-control/at-risk-v2'}>
                <button>At Risk V2</button>
            </Link>
        </section>
    )
}

export default Nav;