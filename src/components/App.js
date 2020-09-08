import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [closePopup, setClosePopup] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [selectedCardName, setSelectedCardName] = React.useState("");

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={() => {
              setIsEditProfilePopupOpen(true);
              setClosePopup(false);
            }}
            onAddPlace = {() => {
              setIsAddPlacePopupOpen(true);
              setClosePopup(false);
            }}
            onEditAvatar={() => {
              setIsEditAvatarPopupOpen(true);
              setClosePopup(false);
            }}
            closeAllPopups={() => {
              setClosePopup(true);
              setIsEditProfilePopupOpen(false);
              setIsAddPlacePopupOpen(false);
              setIsEditAvatarPopupOpen(false);
              setIsEditAvatarPopupOpen(false);
              setIsImagePopupOpen(false);
            }}
            onCardClick={(name, link) => {
              setIsImagePopupOpen(true);
              setSelectedCard(link);
              setSelectedCardName(name);
              setClosePopup(false);
            }}                 
          editProfileIsOpen={isEditProfilePopupOpen}
          addPlaceIsOpen={isAddPlacePopupOpen}
          editAvatarIsOpen={isEditAvatarPopupOpen}
          imagePopupIsOpen={isImagePopupOpen}
          imageLink={selectedCard}
          imageName={selectedCardName}
          closePopup={closePopup}
      />
      <Footer />
    </div>);
}

export default App;
