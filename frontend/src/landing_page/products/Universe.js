import React from 'react';
function Universe() {
    return (  <div className="container">
        <div className="row text-center">
        <h2 className='fs-5 my-5 fst-italic'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h2>
        <h1 className='fs-2 mt-5 fst-bold'>The Zerodha Universe</h1>
        <p className='mt-2 mb-4 text-secondary'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="row text-center m-5 p-5">
            


            <div className="col px-5">
                <img src="media\images\zerodhaFundhouse.png" alt="zerodhaFundHouse" className="img-fluid" />
                <p className='text-secondary'>Our Asset Management Venture</p>
                <br /><br />
                <img src="media\images\sensibullLogo.svg" alt="sensibull" className="img-fluid" style={{transform:"scale(2)"}} />
                <br /> <br />
                <p className='text-secondary'>Options Trading Platform</p>
            </div>
            <div className="col px-5">
                <img src="media\images\tijori.svg" alt="tijori" className="img-fluid" />
                <p className='text-secondary'>Investment Research Platform</p>
                <br /><br />
                <img src="media\images\streakLogo.png" alt="streakLogo" className="img-fluid" />
                <p className='text-secondary'>systematic trading platform</p>
            </div>
            <div className="col px-5">
                <img src="media\images\smallcaseLogo.png" alt="smallcaseLogo" className="img-fluid" />
                <p className='text-secondary'>Thematic Investing Platform</p>
                <br /><br />
                <img src="media\images\dittoLogo.png" alt="dittoLogo" className="img-fluid" />
                <p className='text-secondary'>Personalised advice on health insurance</p>
            </div>


            
        </div>
    </div>);
}

export default Universe;