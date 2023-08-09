import React from 'react'; // Don't forget to import React
import { actors } from '../data';

function Actors() {
  function renderActors() {
    return (
      actors.map((element, index) => (
        <section key={index}>
          <h1>{element.name}</h1>
          <ul>
            {element.movies.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      ))
    );
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
}

export default Actors;

