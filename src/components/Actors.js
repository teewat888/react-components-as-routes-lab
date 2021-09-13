import React from 'react';
import { actors } from '../data';

const actorsList = () => {
  return (
    actors.map(el => {
      return (
        <div>
        <h2>Name: {el.name}</h2>
        <h3>Movies: </h3>
        <ul>{el.movies.map(e => <li>{e}</li>)}</ul>
        </div>
      )
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList()}
    </div>
  );
};

export default Actors;
