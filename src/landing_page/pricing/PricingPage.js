import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Explained from './Explained';

function PricingPage() {
    return (  <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Brokerage></Brokerage>
    <Explained />
    <Footer></Footer>
    
    
    </>);
}

export default PricingPage;