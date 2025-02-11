import React, { useState } from 'react';
import { useNavigate } from 'react-router'

const Login = ({ onLoginSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const  navigate = useNavigate()
    const handleLogin = () => {
        fetch('https://frontend-take-home-service.fetch.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Ensures cookies are sent
            body: JSON.stringify({ name, email })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            console.log('Login successful!');
        })
        .catch(error => console.error('Error:', error));
    }

    return(
        <div>
            <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
            <input type='text' placeholder='Email'onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;