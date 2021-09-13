import React from 'react';
import { movies } from '../data';


const moviesList = () => {
  return movies.map(el => {
    return (
      <div>
      <h2>Name: {el.title}</h2>
      <h3>Time: {el.time}</h3>
      <h3>Genres:</h3>
      <ul>{el.genres.map(e => <li>{e}</li>)}</ul>
      </div>
    )
  })
}
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList()}
    </div>
  );
};

export default Movies;
