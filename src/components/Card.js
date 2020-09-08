import React from 'react';

function Card({name, link, likes, onCardClick}) {

    function handleClick() {
        onCardClick(name, link);
    } 
    return (
        <React.Fragment>
            <li className="photo__item">
                <div className="photo__image" onClick={handleClick} style={{ backgroundImage: `url(${link})` }} ></div>
                <button type="button" className="photo__remove"></button>
                <div className="photo__name">
                    <h2 className="photo__text">{name}</h2>
                    <div className="photo__like">
                        <button type="button" className="photo__like-button"></button>
                        <h3 className="photo__like-count">{likes}</h3>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
}

export default Card;
