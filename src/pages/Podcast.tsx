import React from 'react';
function Podcast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4 mb-4">Bacon Sale Podcast</h1>
          <p className="lead">
            A COMEDIAN WHO LIKES MOVIES AND A MOVIE CRITIC WHO IS SOMETIMES
            FUNNY DISCUSS MOVIES, MUSIC, TELEVISION SHOWS, VIDEO GAMES AND OTHER
            POP CULTURE TOPICS.
          </p>
          <a
            href="https://baconsale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-primary mt-3"
          >
            Listen Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
