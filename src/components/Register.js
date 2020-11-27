import React from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../auth.js';

function Register({ openingInfoTooltip}) {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }
        auth.register(password, email)
            .then((res) => {
                if (!res || res.statusCode===400) {
                    openingInfoTooltip(false);
                } else{
                    openingInfoTooltip(true);
                    return res;
                }
            })
            .then(resetForm)
            .catch(err => openingInfoTooltip(false))
    }

        return (
            <div className="auth">
                <div className="auth__container">
                    <p className="auth__welcome">Sign up</p>
                    <form action="#" className="form_auth" onSubmit={handleSubmit}>
                        <input className="form__input form__input_auth" placeholder="Email" required id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input className="form__input form__input_auth" placeholder="Password" required id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="form__save form__save_auth">Sign up</button>
                    </form>
                    <p className="auth__paragraph" ><Link to="/signin" className="auth__link">Already a member? Log in here!</Link></p>
                </div>
            </div>
        );

}

export default Register;
