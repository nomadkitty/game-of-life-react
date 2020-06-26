import React from "react";

// import components
import Dashboard from "./components/Dashboard";
import About from "./components/About";

import styled from "styled-components";
import tronImg from "./assets/Tron.jpg";

const AppContainer = styled.div`
  background-image: url(${tronImg});
  background-size: cover;
  color: yellow;
`;

const Container = styled.div`
  // display: flex;
  // max-width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
  color: #fbfd8a;
  height: 5rem;
  padding-top: 2rem;
`;

function App() {
  return (
    <AppContainer>
      <Title>The Game of Life</Title>
      <Container>
        <Dashboard />
        <About />
      </Container>
    </AppContainer>
  );
}

export default App;
