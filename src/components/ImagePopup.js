import React from 'react';

function ImagePopup({ cardLink, cardName, imagePopupIsOpened, onClose}) {
    return (
        <div>
            {imagePopupIsOpened ? (
                <div className="popup popup_opened popup_type_image">
                    <div className="popup__content popup__content_theme_transparent">
                        <figure className="figure">
                            <img src={cardLink} alt="" className="figure__image" />
                            <figcaption className="figure__caption">{cardName}</figcaption>
                        </figure>
                        <button type="button" className="popup__close" onClick={onClose}></button>
                    </div>
                </div>
            ) : (
                    <div>
                    </div>
                )}
        </div>
    );
}

export default ImagePopup;