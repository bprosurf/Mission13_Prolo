import React from 'react';
import JoelHilton from './JoelHiltonHeadshot.jpg';

function Home() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={JoelHilton}
            alt="Joel Hilton"
            //className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 mb-4">Joel Hilton's Movie Collection</h1>
          <p className="lead">
            “The length of a film should be directly related to the endurance of
            the human bladder.”
          </p>
          <p>
            "Movies are a form of magic that allows us to enter worlds we may
            never experience and empathize with lives we may never lead." -
            Roger Ebert
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
