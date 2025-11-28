import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    return ( <>
    <Navbar></Navbar>
    <Hero></Hero>
    <CreateTicket></CreateTicket>
    <Footer></Footer>
    </> );
}

export default SupportPage;