import React from "react";

// import components
import Dashboard from "./components/Dashboard";
import About from "./components/About";

import styled from "styled-components";
import tronImg from "./assets/Tron.jpg";

const AppContainer = styled.div`
  background-image: url(${tronImg});
  background-size: cover;
  color: #fbfd8a;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 auto 1.5rem;
  text-align: center;
  height: 5rem;
  padding-top: 1.5rem;
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
