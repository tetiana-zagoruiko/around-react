import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name,
            link
        });
    }

    return (
        <div>
            <PopupWithForm
                onSubmit={handleSubmit}
                isOpen={isOpen}
                onClose={onClose}
                name="add-photo"
                buttonText="Create"
                title="New place"
                children={
                    <React.Fragment>
                        <input onChange={handleNameChange} id="photo-title" name="name" type="text" className="form__input form__input_type_photo-title" placeholder="Title" required maxLength="30" minLength="1" />
                        <span id="photo-title-error" className="form__error"></span>

                        <input onChange={handleLinkChange} id="photo-url" name="link" type="url" className="form__input form__input_type_photo-url" placeholder="Image link" required />
                        <span id="photo-url-error" className="form__error"></span>
                    </React.Fragment>}
            />
        </div>
    );
}

export default AddPlacePopup;