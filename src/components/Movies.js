import React, { useContext } from 'react';
import Movie from './Movie';
import { MoviesContext } from './MoviesContext';
const Movies = () => {
  const [movies] = useContext(MoviesContext);
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default Movies;
