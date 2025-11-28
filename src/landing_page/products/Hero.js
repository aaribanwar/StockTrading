import React from 'react';
function Hero() {
    return ( <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="col text-center m-5">
                <h1 className='fs-2 p-2'>Zerodha Products</h1>
                <h2 className='fs-3 p-2 fst-italic'>Sleek, modern, and intuitive trading platforms</h2>
                <h3 className='fs-4 p-2 text-secondary'>Check out our <a href="#">investment offerings →</a></h3>
            </div>
            <div className="col-2"></div>
        </div>
        <hr />
    </div> );
}

export default Hero;