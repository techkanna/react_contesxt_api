import React from 'react';

const Movie = ({ name, price }) => {
  const movieStyles = {
    spacing: {
      margin: '1rem'
    }
  };
  return (
    <div style={movieStyles.spacing}>
      <h3>{name}</h3>
      <h5>{price}</h5>
    </div>
  );
};

export default Movie;
