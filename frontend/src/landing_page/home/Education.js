import React from 'react';
function Education() {
    return (
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media\images/education.svg" alt="Education" className='mb-5' />
                   
                </div>
                <div className="col-6">
                    <h1 className='fs-2'>Free and open market education</h1>
                    <br />
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <button className='btn btn-outline-primary'style={{borderColor:'transparent'}}>Varsity<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <br /><br />
                    
                
                  <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                  <button className='btn btn-outline-primary' style={{borderColor:'transparent'}}>TradingQ&A<i class="fa fa-arrow-right" aria-hidden="true"></i></button>

                </div>
            </div>
        </div>
    );
}

export default Education;