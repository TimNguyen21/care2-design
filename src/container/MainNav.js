import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/container/MainNav.scss';

const MainNav = () => {
    return (
        <section class="main-nav">
            <Link to={'/electron/login'}>
                <button>Electron App Design</button>
            </Link>
            <Link to={'/create-flow/start-page'}>
                <button>Petition Create Flow Design</button>
            </Link>
            <Link to={'/air-traffic-control/near-completion'}>
                <button>Air Traffic Control Design</button>
            </Link>
        </section>
    )
}

export default MainNav;