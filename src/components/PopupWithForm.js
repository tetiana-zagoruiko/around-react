import React from 'react';

function PopupWithForm({ name, buttonText, title, children, isOpen, closeAllPopups, onClose }) {
    return (
        <div>
            {isOpen && onClose!==true ? (
                <div className={`popup popup_opened popup_type_${name}`}>
                    <div className="popup__content">
                        <form action="#" className="form" name={name}>
                            <p className="form__text">{title}</p>
                            {children}
                            <button type="submit" className="form__save">{buttonText}</button>
                        </form>
                        <button className="popup__close" onClick={closeAllPopups}></button>
                    </div>
                </div>
            ) : (
                    <div className={`popup popup_type_${name}`}>
                        <div className="popup__content">
                            <form action="#" className="form" name={name}>
                                <p className="form__text">{title}</p>
                                {children}
                                <button type="submit" className="form__save">{buttonText}</button>
                            </form>
                            <button className="popup__close"></button>
                        </div>
                    </div>
                )}
        </div>
        );
}

export default PopupWithForm;