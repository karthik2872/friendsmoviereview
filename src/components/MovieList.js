import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  console.log(`Inside MovieList Component ${props.movies}`);
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start col-md-4">
          <figcaption>{movie.title}</figcaption>
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
