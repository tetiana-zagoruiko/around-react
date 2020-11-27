import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            title: description,
        });
    }

    return (
        <div>
        <PopupWithForm
        onSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
        name="edit-profile"
        buttonText="Save"
        title="Edit profile"
        children={
            <React.Fragment>
                <input onChange={handleNameChange} id="profile-name" name="name" type="text" className="form__input form__input_type_name" placeholder={name} required maxLength="40" minLength="2" />
                <span id="profile-name-error" className="form__error"></span>

                <input onChange={handleDescriptionChange} id="profile-text" name="title" type="text" className="form__input form__input_type_title" placeholder={description} required maxLength="200" minLength="2" />
                <span id="profile-text-error" className="form__error"></span>
            </React.Fragment>}
    /> 
    </div>
    );
}

export default EditProfilePopup;