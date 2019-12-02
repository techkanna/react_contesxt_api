import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext';
import uuid from 'uuid';
const AddMovies = () => {
  const [movies, getMovies] = useContext(MoviesContext);
  let [name, getName] = useState('');
  let [price, getPrice] = useState('');

  const updateName = e => {
    getName(e.target.value);
  };

  const updatePrice = e => {
    getPrice(e.target.value);
  };

  const updateMovie = e => {
    e.preventDefault();
    getMovies(prevMovies => [
      ...prevMovies,
      { id: uuid.v4(), name: name, price: price }
    ]);
    getName((name = ''));
    getPrice((price = ''));
  };

  const formStyles = {
    spacing: {
      margin: '3rem'
    }
  };

  return (
    <form onSubmit={updateMovie} style={formStyles.spacing}>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={updateName}
      />
      <input
        type="text"
        name="price"
        required
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovies;
