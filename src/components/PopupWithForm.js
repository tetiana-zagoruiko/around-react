import React from 'react';

function PopupWithForm({ name, buttonText, title, children, isOpen, onClose, onSubmit }) {

    return (
        <div>
            {isOpen ? (
                <div className={`popup popup_opened popup_type_${name}`}>
                    <div className="popup__content">
                        <form action="#" className="form" name={name} onSubmit={onSubmit}>
                            <p className="form__text">{title}</p>
                            {children}
                            <button type="submit" className="form__save">{buttonText}</button>
                        </form>
                        <button className="popup__close" onClick={onClose}></button>
                    </div>
                </div>
            ) : (
                    <div>
                    </div>
                )}
        </div>
        );
}

export default PopupWithForm;