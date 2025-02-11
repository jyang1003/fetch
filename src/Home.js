import React, { Component } from 'react';

function Home() {
    const getDogData = () => {
        fetch('https://frontend-take-home-service.fetch.com/dogs/search?Leonberg', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => console.log('This is dog data:', data))
        .catch(err => console.error('Error fetching protected data:', err))
    }

    return(
        <div>
            <input onClick={getDogData} type="text" placeholder="Search"></input>
        </div>
    )
}

export default Home;