import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import CardContext from '../contexts/CardContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [selectedCardName, setSelectedCardName] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
  }, [])

  React.useEffect(() => {
    api.getCardList()
      .then(res => {
        setCards(res);
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card.card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === newCard._id ? newCard : c);
      setCards(newCards);
    });
  }

  function handleCardDelete(cardID) {
    api.removeCard(cardID).then(res => {
      const newCards = cards.filter(card => card._id !== cardID);
      setCards(newCards);
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateUser({name, title}) {
    api.setUserInfo({ name, title})
      .then(res => {
        closeAllPopups();
        setCurrentUser(res);
      })
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
      .then(res => {
        closeAllPopups();
        setCurrentUser(res);
      })
  }

  function handleAddPlaceSubmit({ name, link }) {
    api.addCard({ name, link })
      .then(res => {
        const addedCardList = cards.concat(res)
        setCards(addedCardList);
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <CardContext.Provider value={cards}>
    <div className="page">
      <Header />
      <Main onEditProfile={() => {
              setIsEditProfilePopupOpen(true);
            }}
            onAddPlace = {() => {
              setIsAddPlacePopupOpen(true);
            }}
            onEditAvatar={() => {
              setIsEditAvatarPopupOpen(true);
            }}
            onCardClick={(card) => {
              setIsImagePopupOpen(true);
              setSelectedCard(card.card.link);
              setSelectedCardName(card.card.name);
            }}                 
          editProfileIsOpen={isEditProfilePopupOpen}
          editAvatarIsOpen={isEditAvatarPopupOpen}
          addPlaceIsOpen={isAddPlacePopupOpen}
          imagePopupIsOpen={isImagePopupOpen}
          imageLink={selectedCard}
          imageName={selectedCardName}
          onClose={closeAllPopups}
          onCardLike={handleCardLike}
          onCardDelete= {handleCardDelete}
          cards={cards}
      />
      <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
    </div>
    </CardContext.Provider>
    </CurrentUserContext.Provider>
);
}

export default App;
