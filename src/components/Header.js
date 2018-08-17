import React from 'react';

import MainLinks from './MainLinks';

class Header extends React.Component {
    render() {
        return (
            <header className="Header-header">
                <div className="Header-content">
                    <span className="Header-title"><h1>Pasi Hanhijärvi</h1></span>
                    <MainLinks/>
                </div>
            </header>
        );
    }
}

export default Header;