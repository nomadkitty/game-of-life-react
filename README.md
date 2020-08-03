# Game of Life

**Deployed website**:
[Game of Life](https://game-of-life-react.vercel.app/)

## Description

The Game of Life React App is a web representation of John Conway's Game of Life. This is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.
This game became widely known when it was mentioned in an article
published by Scientific American in 1970.
It consists of a collection of cells which, based on a few mathematical rules,
can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

## Game Rules

1. Any live cell with fewer than two live neighbors dies, as if by under population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## The Game Controls

- Start/Stop Button: start or stop the game simulation
- Next Button: advance to a new generation of cells
- Clear Button: clear out the grid and set generation back to 0
- Speed Slider: control speed from 0.1 to 3 seconds

## Getting Started

To begin using the App as a client end user, follow the link and click the "Random" button to randomly create "Generation 0". Then press "Start" button to view the change for each generation.
<img width="720" height="400" src="https://github.com/nomadkitty/game-of-life-react/blob/game/src/assets/game_display.PNG" />

## Prerequisites

All of the below dependencies can be installed using:
`yarn install` or `npm install`

Start development by creating a react app using:
`yarn start` or `npm start`

## Dependencies

This project was created using yarn and designed for react client side. Other dependencies include:

```
"dependencies": {
  "@testing-library/jest-dom": "^4.2.4",
  "@testing-library/react": "^9.3.2",
  "@testing-library/user-event": "^7.1.2",
  "bootstrap": "^4.5.0",
  "immer": "^7.0.5",
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-scripts": "3.4.1",
  "reactstrap": "^8.5.1",
  "styled-components": "^5.1.1"
}
```

## Support

There is currently no active support for this app

#### Made with ❤️ by [Jojo Zhang](https://github.com/nomadkitty)

## Project status

This project was a independent challenge and was completed for a Lambda July 2020. There may be updates to the application periodically

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
