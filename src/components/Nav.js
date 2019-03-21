import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
    const pathName = window.location.pathname.split('/');
    return (
        <aside className="ssc-c-navigation">
            <ul>
                <li>
                    <Link to="/">Post</Link>
                </li>
                <li>
                    <Link to="/galery">Galery</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </aside>
    );
}
