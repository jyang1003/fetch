import React, { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        fetch('https://frontend-take-home-service.fetch.com/auth/login', {
            method: 'POST',
            credentials: 'include',
            name: name, 
            email: email
        })
    }
    return(
        <div>
            <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Email'></input>
            <button>Login</button>
        </div>
    )
}

export default Login;