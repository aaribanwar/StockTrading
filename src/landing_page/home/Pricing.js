import React from 'react';
function Pricing() {
    return ( 
    <div className="container p-5 mb-5 ">
            <div className="row">
                
                <div className="col">
                    <h1 className='fs-2'>Unbeatable Pricing</h1>
                    <br />
                    
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <button className='btn btn-outline-primary' style={{borderColor:'transparent'}}>See Pricing<i class="fa fa-arrow-right" aria-hidden="true"></i></button>

                </div>

    
                
                <div className="col">
                    <div className="row ">
                        <div className="col">
                            <img src="media\images\pricing0.svg" alt="Pricing" />
                            <p>free account opening</p>
                        </div>
                        <div className="col">
                            <img src="media\images\pricing0.svg" alt="Pricing" />
                            <p>free Equity and Direct mutual funds</p>
                        </div>
                        <div className="col">
                            <img src="media\images\intradayTrades.svg" alt="intradayTrades" />
                            <p>Intraday and FAO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
}
export default Pricing;