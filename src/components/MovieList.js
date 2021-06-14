import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start col-md-4">
          <figcaption>{movie.Title}</figcaption>
          <figcaption>{movie.Year}</figcaption>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
