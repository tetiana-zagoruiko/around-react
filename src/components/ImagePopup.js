import React from 'react';

function ImagePopup({ cardLink, cardName, imagePopupIsOpened, closeAllPopups, onClose}) {
    return (
        <div>
            {imagePopupIsOpened && onClose!==true ? (
                <div className="popup popup_opened popup_type_image">
                    <div className="popup__content popup__content_theme_transparent">
                        <figure className="figure">
                            <img src={cardLink} alt="" className="figure__image" />
                            <figcaption className="figure__caption">{cardName}</figcaption>
                        </figure>
                        <button type="button" className="popup__close" onClick={closeAllPopups}></button>
                    </div>
                </div>
            ) : (
                    <div className="popup popup_type_image">
                        <div className="popup__content popup__content_theme_transparent">
                            <figure className="figure">
                                <img src={cardLink} alt="" className="figure__image" />
                                <figcaption className="figure__caption">{cardName}</figcaption>
                            </figure>
                            <button type="button" className="popup__close"></button>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ImagePopup;