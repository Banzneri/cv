import React from 'react';
import { Link } from 'react-router-dom';

const MainLinks = props => (
    <div className="MainLinks-links">
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
);

export default MainLinks;