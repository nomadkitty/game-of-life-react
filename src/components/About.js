import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h3>The Game</h3>
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns">
          wikipedia: Conway's Game of Life{" "}
        </a>
        <p>
          The Game of Life is not your typical computer game. It is a 'cellular
          automaton', and was invented by Cambridge mathematician{" "}
          <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">
            John Conway
          </a>
          .
          <br />
          This game became widely known when it was mentioned in an article
          published by Scientific American in 1970. It consists of a collection
          of cells which, based on a few mathematical rules, can live, die or
          multiply. Depending on the initial conditions, the cells form various
          patterns throughout the course of the game.
        </p>
      </div>
      <div>
        <h3>The Rules</h3>
        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ol>
      </div>
      <div>
        <h3>The Game Controls</h3>
        <ul>
          <li>Start/Stop Button: start or stop the game simulation</li>
          <li>Next Button: advance to a new generation of cells</li>
          <li>Clear Button: clear out the grid and set generation back to 0</li>
          <li>Speed Slider: control speed from 0.1 to 3 seconds</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
