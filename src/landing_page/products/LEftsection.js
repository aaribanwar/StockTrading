import React from "react";
function Leftsection({
  imageURL,
  title,
  description,
  demoLink,
  learnLink,
  playLink,
  appLink,
}) {
  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={title} className="img-fluid" />
        </div>

        <div className="col-6">
          <h1>{title}</h1> <br />
          <p>{description}</p>

          <div className="row p-5">
            <div className="col">
              <a href={demoLink}>Try Demo</a> <br />
              <br /><br /><br />
              <a href={playLink}>
                <img
                  src="media\images\googlePlayBadge.svg"
                  alt="Google Play Store"
                  className="img-fluid"
                />
              </a>{" "}
              <br />
            </div>

            <div className="col">
              <a href={learnLink}>Learn More</a> <br />
              <br /><br /><br />
              <a href={appLink}>
                <img
                  src="media\images\appstoreBadge.svg"
                  alt="Apple App Store"
                  className="img-fluid"
                />
              </a>{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsection;
