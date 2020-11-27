import React from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import * as auth from '../auth.js';

function Login({ handleLogin, openingInfoTooltip }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const history = useHistory();

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        auth.authorize(password, email)
            .then((data) => {
                if (data.token) {
                    handleLogin();
                    history.push('/')
                } else {
                    openingInfoTooltip(false);
                }
            })
            .then(resetForm)
            .catch(err => openingInfoTooltip(false));
    }

    return (
            <div className="auth">
            <div className="auth__container">
                <p className="auth__welcome">Log in</p>
                <form action="#" className="form_auth" onSubmit={handleSubmit}>
                    <input className="form__input form__input_auth" placeholder="Email" required id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="form__input form__input_auth" placeholder="Password" required id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="form__save form__save_auth">Log in</button>
                </form>
                <p className="auth__paragraph" ><Link to="/signup" className="auth__link" >Not a member yet? Sign up here!</Link></p>
            </div>
            </div>
        )
}

export default withRouter(Login);