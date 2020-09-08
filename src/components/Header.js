import React from 'react';

function Header() {
    return (
        <div>
                <header className="header">
                    <div className="header__container">
                        <img src={require("../images/logo.svg")} alt="logo" className="logo" />
                    </div>
                </header>
        </div>
    );
}

export default Header;
