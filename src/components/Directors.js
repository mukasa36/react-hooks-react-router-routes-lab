import React from "react"; 

import { directors } from "../data";

function directorsMovies() {
  return directors.map((element, index) => (
    <section key={index}>
      <h1>{element.name}</h1>
      <ul>
        {element.movies.map((item, movieIndex) => (
          <li key={movieIndex}>{item}</li>
        ))}
      </ul>
    </section>
  ));
}

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsMovies()}
    </div>
  );
}

export default Directors;
