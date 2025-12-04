import React from 'react';
import Hero from './Hero';
import Universe from './Universe';
import Rightsection from "./Rightsection";
import Leftsection from "./Leftsection";
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from "../OpenAccount";



function ProductPage() {
    return (  <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Leftsection 
    imageURL={"media\\images\\kite.png"}
     title={"Kite"} 
     description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} 
     demoLink={"https://dashboardstocktrading.netlify.app/login"}
     learnLink={"https://dashboardstocktrading.netlify.app/login"}
     playLink={"https://dashboardstocktrading.netlify.app/login"}
     appLink={"https://dashboardstocktrading.netlify.app/login"}
     ></Leftsection>

    <Rightsection

    imageURL={"media\\images\\console.png"}
    title={"Console"}
    description={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}
    learnLink={"#"}
    
    
    
    ></Rightsection>

    <Leftsection 
    imageURL={"media\\images\\coin.png"}
     title={"Coin"} 
     description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} 

     demoLink={"https://dashboardstocktrading.netlify.app/login"}
     learnLink={"https://dashboardstocktrading.netlify.app/login"}
     playLink={"https://dashboardstocktrading.netlify.app/login"}
     appLink={"https://dashboardstocktrading.netlify.app/login"}
     ></Leftsection>

    <Rightsection

    imageURL={"media\\images\\landing.svg"}
    title={"Kite Connect API"}
    description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}

    learnLink={"https://dashboardstocktrading.netlify.app/login"}
    
    
    
    ></Rightsection>

    <Leftsection 
    imageURL={"media\\images\\varsity.png"}
     title={"Varsity mobile"} 
     description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} 
     demoLink={"https://dashboardstocktrading.netlify.app/login"}
     learnLink={"https://dashboardstocktrading.netlify.app/login"}
     playLink={"https://dashboardstocktrading.netlify.app/login"}
     appLink={"https://dashboardstocktrading.netlify.app/login"}
     ></Leftsection>

    <Universe />

    <OpenAccount></OpenAccount>
    <Footer></Footer>
    
    </>);
}

export default ProductPage;

