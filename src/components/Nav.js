import React, { useContext } from 'react';
import { MoviesContext } from './MoviesContext';

const Nav = () => {
  const [movies] = useContext(MoviesContext);
  const navStyles = {
    nav: {
      height: '5rem',
      backgroundColor: 'rgb(19, 70, 128)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
  };
  return (
    <nav style={navStyles.nav}>
      <h2>SenthilKannan</h2>

      <h3>No of Movies: {movies.length}</h3>
    </nav>
  );
};

export default Nav;
