import React from 'react';

import MainLinks from './MainLinks';

const Header = props => (
    <header className="Header-header">
        <div className="Header-content">
            <span className="Header-title"><h1>Pasi Hanhijärvi</h1></span>
            <MainLinks/>
        </div>
    </header>
);

export default Header;