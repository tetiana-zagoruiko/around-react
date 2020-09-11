import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [avatar, setAvatar] = React.useState("");
    const newAvatar = React.createRef();

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);

    function handleAvatarChange(e) {
        setAvatar(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(newAvatar.current.value);
    }

    return (
        <div>
            <PopupWithForm
                onSubmit={handleSubmit}
                isOpen={isOpen}
                onClose={onClose}
                name="edit-avatar"
                buttonText="Save"
                title="Change profile picture"
                children={
                    <React.Fragment>
                        <input onChange={handleAvatarChange} ref={newAvatar} placeholder={avatar} id="avatar-url" name="link" type="url" className="form__input form__input_type_photo-url"
                         required />
                    </React.Fragment>}
            />
        </div>
    );
}

export default EditAvatarPopup;