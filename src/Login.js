import React, { Component } from 'react';
import React, { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        fetch('https://frontend-take-home-service.fetch.com/auth/login', {
            method: 'GET',
            credentials: 'include',
            name: name, 
            email: email
        })
    }
    return(
        <div>

        </div>
    )
}

export default Login;