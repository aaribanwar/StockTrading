import React from 'react';
function Team() {
    return ( <div className="container">
        <div className="row">
            
            <div className="col-4 text-center">
                
            <img src="media\images\aaribdebate.png" alt="Aarib debate" className="img-fluid rounded-circle object-fit-cover mt-2" style={{ height:"220px",width:"220px"}} />
            <p className='fs-4'>Aarib Anwar</p>
            <p className='text-secondary'>Founder, CEO</p>
            </div>
            <div className="col">
                <h1>People</h1>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="www.linkedin.com/in/aaribanwar" className='link-secondary'><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a></p>
            </div>
        </div>
    </div> );
}

export default Team;