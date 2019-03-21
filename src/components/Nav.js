import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <aside className="ssc-c-navigation">
        <ul>
            <li>
                <Link to="/first">First nav</Link>
            </li>
            <li>
                <Link to="/second">First nav</Link>
            </li>
            <li>
                <Link to="/third">First nav</Link>
            </li>
        </ul>
    </aside>
)
