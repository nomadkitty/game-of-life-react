import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const About = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(true);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);

  return (
    <AboutDiv>
      <div>
        <Button onClick={toggle1} size="lg">
          The Game
        </Button>
        <Collapse isOpen={isOpen1}>
          <Card>
            <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns">
              wikipedia: Conway's Game of Life{" "}
            </a>
            <CardBody>
              The Game of Life is not your typical computer game.
              <br />
              It is a 'cellular automaton', and was invented by Cambridge
              mathematician{" "}
              <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">
                John Conway
              </a>
              .
              <br />
              This game became widely known when it was mentioned in an article
              <br />
              published by Scientific American in 1970.
              <br />
              It consists of a collection of cells which, based on a few
              mathematical rules,
              <br />
              can live, die or multiply. Depending on the initial conditions,
              the cells form various patterns throughout the course of the game.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
        <Button onClick={toggle2} size="lg">
          The Rules
        </Button>
        <Collapse isOpen={isOpen2}>
          <Card>
            <CardBody>
              <ol>
                <li>
                  Any live cell with fewer than two live neighbours dies, as if
                  by underpopulation.
                </li>
                <li>
                  Any live cell with two or three live neighbours lives on to
                  the next generation.
                </li>
                <li>
                  Any live cell with more than three live neighbours dies, as if
                  by overpopulation.
                </li>
                <li>
                  Any dead cell with exactly three live neighbours becomes a
                  live cell, as if by reproduction.
                </li>
              </ol>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
        <Button onClick={toggle3} size="lg">
          The Game Controls
        </Button>
        <Collapse isOpen={isOpen3}>
          <Card>
            <CardBody>
              <ul>
                <li>Start/Stop Button: start or stop the game simulation</li>
                <li>Next Button: advance to a new generation of cells</li>
                <li>
                  Clear Button: clear out the grid and set generation back to 0
                </li>
                <li>Speed Slider: control speed from 0.1 to 3 seconds</li>
              </ul>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </AboutDiv>
  );
};

export default About;
