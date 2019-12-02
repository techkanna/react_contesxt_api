import React, { useState, createContext } from 'react';
import uuid from 'uuid';
export const MoviesContext = createContext();

export const MovieProvider = props => {
  const [movies, getMovies] = useState([
    {
      name: 'harry potter',
      price: '$10',
      id: uuid.v4()
    },
    {
      name: 'avenger',
      price: '$50',
      id: uuid.v4()
    },
    {
      name: 'captain america',
      price: '$150',
      id: uuid.v4()
    }
  ]);

  return (
    <MoviesContext.Provider value={[movies, getMovies]}>
      {props.children}
    </MoviesContext.Provider>
  );
};
