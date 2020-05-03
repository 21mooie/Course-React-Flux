import React from 'react';
import HomePage from './HomePage';
import AboutPage from "./AboutPage";

export default function App() {
    const route = window.location.pathname;
    if(route === '/about') return <AboutPage />;
    return <HomePage/>
}
