import React from "react";
import { movies } from "../data";
import NavBar from "./NavBar";

function Movies() {

  function films() {
    return movies.map((element, index) => (
      <section key={index}>
        <h1>{element.title}</h1>
        <p>Running time: {element.time}</p>
        <ul>
          {element.genres.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    ));
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {films()}
    </div>
  );
}

export default Movies;
