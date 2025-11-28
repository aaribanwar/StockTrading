import React from 'react';
function RightSection(
    {
        imageURL,
        title,
        description,
        learnLink,
    }
) {
   return (  
    <div className="container my-5 py-5">
        <div className="row">

            

            <div className="col-6">
                <h1>{title}</h1> <br />
                <p>{description}</p>
                <br />
                <a href={learnLink}>Learn More</a>
                
            </div>

            <div className="col-6">
                <img src={imageURL} alt={title} className="img-fluid" />
            </div>
        </div>
    </div>);
}

export default RightSection;