import React from 'react';
function Hero() {
    return ( <div className="container">
        <div className="row p-5">

        <div className="col-8">
            <h1>Support Portal</h1>
        </div>

        <div className="col-4 text-sm-end">
            <button className='btn btn-primary'>My Tickets</button>
        </div>

        </div>

        <div className="row text-center" id='pricingInput'>
            <input type="text" placeholder='Enter Query Here'/>
        </div>
    </div> );
}

export default Hero;