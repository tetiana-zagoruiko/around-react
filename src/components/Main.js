import React from 'react';
import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onClose, onCardClick, cards, 
                imagePopupIsOpen, imageLink, imageName, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div>
                <main className="main">
                    <section className="profile">
                        <div className="profile__container">
                        <img src={currentUser.avatar} alt="avatar" className="profile__avatar" onClick={onEditAvatar}/>
                            <div className="profile__card">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit" onClick={onEditProfile}></button>
                            <p className="profile__title">{currentUser.about}</p>
                            </div>
                        <button className="profile__add" onClick={onAddPlace}></button>
                        </div>
                    </section>
                    <section className="photo">
                        <ul className="photo__container">
                        {
                            cards.map((card, id) =>
                                <Card
                                    key={id}
                                    onCardClick={onCardClick}
                                    card={card}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                />)
                        }
                        </ul>
                    </section>
                <PopupWithForm
                    name="delete-card"
                    buttonText="Yes"
                    title="Are you sure?"
                    children={
                        <React.Fragment>
                        </React.Fragment>}
                />
                <ImagePopup
                    onClose={onClose}
                    imagePopupIsOpened={imagePopupIsOpen}
                    cardName={imageName}
                    cardLink={imageLink}
                />
                </main>
        </div>
    );
}

export default Main;
