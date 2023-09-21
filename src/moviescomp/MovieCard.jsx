import React from "react";

function MovieCard({ movies }) {
  return (
    <div className="movie">
      <div>
        <p>{movies.Year}</p>
      </div>

      <div>
        <img src={movies.Poster} alt={movies.Title} />
      </div>

      <div>
        <span>{movies.Type}</span>
        <h3>{movies.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
