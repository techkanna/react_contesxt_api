import React from 'react';
import Movies from './components/Movies';
import Nav from './components/Nav';
import AddMovies from './components/AddMovies';
import { MovieProvider } from './components/MoviesContext';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <Movies />
      </div>
    </MovieProvider>
  );
}

export default App;
