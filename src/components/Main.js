import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, editProfileIsOpen, 
                addPlaceIsOpen, editAvatarIsOpen, closePopup, closeAllPopups, onCardClick, 
                imagePopupIsOpen, imageLink, imageName}) {
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserAvatar(res.avatar);
                setUserDescription(res.about);
                setUserName(res.name);
            })
    }, [])

    React.useEffect(() => {
        api.getCardList()
            .then(res => {
                setCards(res.map(card => ({
                    name: card.name,
                    link: card.link,
                    likes: card.likes.length
                })));
            })
    }, [])

    return (
        <div>
                <main className="main">
                    <section className="profile">
                        <div className="profile__container">
                        <img src={userAvatar} alt="avatar" className="profile__avatar" onClick={onEditAvatar}/>
                            <div className="profile__card">
                                <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit" onClick={onEditProfile}></button>
                            <p className="profile__title">{userDescription}</p>
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
                                        name={card.name}
                                        link={card.link}
                                        likes={card.likes}
                                        onCardClick={onCardClick}
                                    />)
                            }
                        </ul>
                    </section>
                <PopupWithForm
                    closeAllPopups={closeAllPopups}
                    isOpen={editProfileIsOpen}
                    onClose={closePopup}
                    name="edit-profile"
                    buttonText="Save"
                    title="Edit profile"
                    children={
                        <React.Fragment>
                        <input id="profile-name" name="name" type="text" className="form__input form__input_type_name" placeholder="Jacques Cousteau" required maxLength="40" minLength="2" />
                        <span id="profile-name-error" className="form__error"></span>

                        <input id="profile-text" name="title" type="text" className="form__input form__input_type_title" placeholder="Explorer" required maxLength="200" minLength="2" />
                        <span id="profile-text-error" className="form__error"></span>
                        </React.Fragment>}
                />
                <PopupWithForm
                    closeAllPopups={closeAllPopups}
                    isOpen={addPlaceIsOpen}
                    onClose={closePopup}
                    name="add-photo"
                    buttonText="Create"
                    title="New place"
                    children={
                        <React.Fragment>
                            <input id="photo-title" name="name" type="text" className="form__input form__input_type_photo-title" placeholder="Title" required maxLength="30" minLength="1" />
                            <span id="photo-title-error" className="form__error"></span>

                            <input id="photo-url" name="link" type="url" className="form__input form__input_type_photo-url" placeholder="Image link" required />
                            <span id="photo-url-error" className="form__error"></span>
                        </React.Fragment>}
                />
                <PopupWithForm
                    closeAllPopups={closeAllPopups}
                    isOpen={editAvatarIsOpen}
                    onClose={closePopup}
                    name="edit-avatar"
                    buttonText="Save"
                    title="Change profile picture"
                    children={
                        <React.Fragment>
                            <input id="avatar-url" name="link" type="url" className="form__input form__input_type_photo-url"
                                placeholder="https://somewebsite.com/someimage.jpg" required />
                        </React.Fragment>}
                />
                <PopupWithForm
                    name="delete-card"
                    buttonText="Yes"
                    title="Are you sure?"
                    children={
                        <React.Fragment>
                        </React.Fragment>}
                />
                <ImagePopup
                    closeAllPopups={closeAllPopups}
                    imagePopupIsOpened={imagePopupIsOpen}
                    cardName={imageName}
                    cardLink={imageLink}
                    onClose={closePopup}
                />
                </main>
        </div>
    );
}

export default Main;
