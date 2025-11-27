import React from 'react';
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Navbar from "../Navbar";
import Footer from '../Footer';


function HomePage() {
    return ( <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Awards></Awards>
    <Stats></Stats>
    <Pricing></Pricing>
    <Education></Education>
    <OpenAccount></OpenAccount>
    
    
    <Footer></Footer>
   
    </>

     );
}

export default HomePage;