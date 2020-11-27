import React from 'react';

function Header({userMail, headerText, headerLink, headerAction}) {
    
    return (
        <div>
                <header className="header">
                    <div className="header__container">
                        <img src={require("../images/logo.svg")} alt="logo" className="logo" />
                        <div className="header__container-right">
                            <p className="header__email">{userMail}</p>
                            <a href={headerLink} onClick={headerAction} className="header__text">{headerText}</a>
                        </div>
                    </div>
                </header>
        </div>
    );
}

export default Header;
