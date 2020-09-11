import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `${isOwn ? 'photo__remove' : 'photo__remove_hide '}`
    );
    
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `${isLiked ? 'photo__like_active' : 'photo__like-button '}`
    );
    
    function handleClick() {
        onCardClick({card});
    } 

    function handleCardLike() {
        onCardLike({ card });
    } 

    function handleCardDelete() {
        onCardDelete(card._id);
    } 
    return (
        <React.Fragment>
            <li className="photo__item">
                <div className="photo__image" onClick={handleClick} style={{ backgroundImage: `url(${card.link})` }} ></div>
                <button type="button" onClick={handleCardDelete} className={cardDeleteButtonClassName}></button>
                <div className="photo__name">
                    <h2 className="photo__text">{card.name}</h2>
                    <div className="photo__like">
                        <button type="button" onClick={handleCardLike} className={cardLikeButtonClassName}></button>
                        <h3 className="photo__like-count">{card.likes.length}</h3>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default Card;
