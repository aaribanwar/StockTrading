import React from 'react';
function Awards() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-6 text-center">
                    <img src="media\images/ecosystem.png" alt="ecosystem" className="img-fluid mb-5" />
                    <button className='btn btn-outline-primary m-2' style={{borderColor:'transparent'}}>Explore Our Products <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <button className='btn btn-outline-primary m-2' style={{borderColor:'transparent'}}>Try Kit Demo<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className="col-6">
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <br /> <br />
                    <h2 className='fs-4'>Customer First Always</h2 >
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <br /><h2 className='fs-4'>No spam or gimmicks</h2 >
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <br /><h2 className='fs-4'>The Zerodha universe</h2 >
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br /><h2 className='fs-4'>Do better with money</h2 >
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
            </div>
        </div>
     );
}

export default Awards;