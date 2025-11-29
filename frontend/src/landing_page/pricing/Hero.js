import React from 'react';
function Hero() {
    return ( <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="col text-center m-5">
                <h1 className='fs-2 p-2'>Charges</h1>
                <h3 className='fs-4 p-2 text-secondary'>List of all charges and taxes</h3>
            </div>
            <div className="col-2"></div>
        </div>
        <hr />

        <div className="row text-center">
            <div className="col">
                <img src="media\images\pricing0.svg" alt="pricing0" className="img-fluid" />
                 <h1 className='fs-3 p-2'>Free Equity and Delivery</h1>
                <h3 className='fs-6 p-2 text-secondary'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h3>

            </div>
             <div className="col">
                <img src="media\images\intradayTrades.svg" alt="pricing0" className="img-fluid" />
                 <h1 className='fs-3 p-2'>Intraday and F&O trades</h1>
                <h3 className='fs-6 p-2 text-secondary'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h3>


            </div>
             <div className="col">
                <img src="media\images\pricing0.svg" alt="pricing0" className="img-fluid" />
                 <h1 className='fs-3 p-2'>Free direct MF</h1>
                <h3 className='fs-6 p-2 text-secondary'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h3>


            </div>
        </div>
    </div> );
}

export default Hero;