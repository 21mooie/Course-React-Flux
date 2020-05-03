import React from 'react';

//React Component should always be named in Pascal Case
export default function HomePage() {
    return (
        <div className='jumbotron'>
            <h1>Pluralsight Administration</h1>
            <p>React, Flux, and React Router for ultra-responsive web apps.</p>
            <a href='/about'>About</a>
        </div>
    );
}