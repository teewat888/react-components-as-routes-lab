import React from 'react';
import { directors } from '../data';

const directorsList = () => {
  return (
    directors.map(el => {
      return (
        <div>
          <h2>Name: {el.name}</h2>
          <h3>Movies:</h3>
          <ul>
            {el.movies.map(e => <li>{e}</li>)}
          </ul>
        </div>
      )
    })
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList()}
    </div>
  );
}

export default Directors
