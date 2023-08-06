
import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();
  const movieId = parseInt(params.movieId);

  const movie = movies.find((movie) => movie.id === movieId);

  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieShow;
